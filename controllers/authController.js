
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { fileDeleteFromCloud, fileUploadToCloud } from "../utilis/cloudinary.js";
import jwt from "jsonwebtoken"
import { createOTP, findPublicId, isEmail, isMobile, tokenDecode } from "../helpers/helper.js";
import { AccountActivationEmail } from "../mails/AcountActivationEmail.js";
import { sendSMS } from "../utilis/sendSMS.js";


/**
 * @DESC  USER REGISTER
 * @METHOD POST
 * @ROUTE /api/v1/auth/register
 * @ACCESS PUBLIC 
 * 
 */
export const registerUser = asyncHandler(async(req, res) => {
  // get form data 
  const { name, auth, password, role, cPass } = req.body;

  // validation 
  if (!name || !auth || !password) {
   return res.status(400).json({ message : "All fileds are required"});
  };

  // confirm password
  if (password !== cPass) {
    return res.status(400).json({ message : "Password Not Match"});
  }; 

  // create otp 
  const otp = createOTP();
 
  // check user phone or email 
   let authEmail = null;
   let authPhone = null;


   if (isEmail(auth)) {
    authEmail = auth; 

    // check email existance
    const emailCheck = await User.findOne({ email : auth });

    if (emailCheck) {
      return res.status(400).json({ message : "Email Already Exisits"});
      };  
   }else if(isMobile(auth)){
    authPhone = auth;

   // phone number check 
   const phoneCheck = await User.findOne({ phone : auth });

    if (phoneCheck) {
       return res.status(400).json({ message : "Phone Number Already Exisits"});
     }; 
   }else{
    return  res.status(400).json({ message : "You must have Phone number or Email"});
   }  


 // hash password 
  const hassPass = await bcrypt.hash(password, 10);
  

 // create user 
 const user = await User.create({
  name : name,
  email : authEmail,
  phone : authPhone,
  password : hassPass,
  accessToken : otp,
  role : role
 }); 

 if (user) {
   // create token 
   const activationToken = jwt.sign({ auth }, process.env.ACCOUNT_ACTIVATION_SECRET, { expiresIn : "60min"});

   // send token to cookie  
   res.cookie("activationToken", activationToken);


   if (authEmail) {
     // send OTP toemail 
     await AccountActivationEmail(auth, { name : name, code : otp, link : ""}); 
   }else if(authPhone){
     // send OTP to phone 
     await sendSMS(auth, `Hello ${name}, Your Activation OTP ${otp}`)
   }else{
    res.status(400).json({ message : "You must use Phone Number or Email Address"});
   }
 }

 res.status(201).json({ message : "User Created Successfull",  users : user });
});




/**
 * @DESC  User Account Activation
 * @METHOD POST
 * @ROUTE /api/v1/auth/account-activated-by-otp/:token
 * @ACCESS PUBLIC 
 * 
 */
export const accountActivateByOTP = asyncHandler(async(req, res) => {
   // get params 
   const { token } = req.params;
   const { otp } = req.body;
 
   // token decode 
   const activationToken = tokenDecode(token); 

   // verify token 
   const verifyToken = jwt.verify(activationToken, process.env.ACCOUNT_ACTIVATION_SECRET); 

   if (!verifyToken) {
    return res.status(400).json({ message : "Invalid Token " });
   }

 // activate user 
 let activateUser = null;

 if (isEmail(verifyToken.auth)) {
  activateUser = await User.findOne({ email : verifyToken.auth });

  if (!activateUser) {
   return res.status(400).json({ message : "Email Invalid" });
  }

 }else if(isMobile(verifyToken.auth)){
  activateUser = await User.findOne({ phone : verifyToken.auth });
 
  if (!activateUser) {
    return  res.status(400).json({ message : "Phone number Invalid" });
  }else{
    return res.status(400).json({ message : "Invalid User Account" });
  }
 }

 // check otp 
 if (otp !== activateUser.accessToken) {
  return res.status(400).json({ message : "Invalid OTP" });
 }

 // update user 
 activateUser.isActivated = true;
 activateUser.accessToken = null;
 activateUser.save();


 // clear cookie 
 res.clearCookie("activationToken"); 

 res.status(200).json({ message : "User Activation Successfull" });
});



/**
 * @DESC  User Login
 * @METHOD POST
 * @ROUTE /api/v1/auth/login
 * @ACCESS PUBLIC 
 * 
 */
export const login = asyncHandler(async(req, res) => {
  // get form data  
  const { auth, password } = req.body;
 
  // validation 
  if (!auth || !password ) {
    return res.status(200).json({ message : "All fields are Required"});
  }


  // check login user 
  let loginUser = null;


  if (isEmail(auth)) {
     // find email user 
     loginUser = await User.findOne({ email : auth});

     // check email validation 
     if (!loginUser) {
      return res.status(404).json({ message : "Email user not found"});
     }; 

  }else if(isMobile(auth)){
     // find email user 
     loginUser = await User.findOne({ phone : auth});

     // check email validation 
     if (!loginUser) {
      return res.status(404).json({ message : "Phone Number user not found"});
     }; 
  }else{
    return res.status(404).json({ message : "You must use Mobile or Phone Number"});
  }
 
  // check password 
  const checkPassword = await bcrypt.compare(password, loginUser.password);

  // password validation 
  if (!checkPassword) {
    return res.status(404).json({ message : "Wrong Password"});
  }; 

  // create login user token 
  const accessToken = jwt.sign({ auth : auth}, process.env.USER_LOGIN_SECRET, {
    expiresIn : "365d"
  }); 

  // check token 
  if (!accessToken) {
    return res.status(404).json({ message : "Invalid Access Token"});
  }; 


  // set cookie 
  res.cookie("accessToken", accessToken, {
     httpOnly : true,
     secure : process.env.APP_ENV === "Development" ? false : true,
     sameSite : "strict",
     path : "/",
     maxAge : 1000 * 60 * 60 * 24 * 365,
  }); 


res.status(200).json({ user : loginUser, message : "User login Successfull", accessToken });
});




/**
 * @DESC  User Logged in user data
 * @METHOD GET 
 * @ROUTE /api/v1/auth/me
 * @ACCESS PRIVATE 
 * 
 */
export const getLoggedInUser = asyncHandler(async(req, res) => {
    
  // logged in check 
  if (!req.me) {
     return res.status(400).json({ message : "User loggedin data not found" });
  }

res.status(200).json({auth : req.me ,  message : "User logged in Successfull" });
});



/**
 * @DESC  User Logout
 * @METHOD GET 
 * @ROUTE /api/v1/auth/logout
 * @ACCESS PRIVATE 
 * 
 */
export const logout = asyncHandler(async(req, res) => {
 // clear cookie 
 res.clearCookie("accessToken")

res.status(200).json({ message : "User logout Successfull" });
});




