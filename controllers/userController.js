import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { fileDeleteFromCloud, fileUploadToCloud } from "../utilis/cloudinary.js";
import jwt from "jsonwebtoken"
import { findPublicId, isEmail, isMobile } from "../helpers/helper.js";

/**
 * @DESC GET ALL USER 
 * @METHOD GET
 * @ROUTE /api/v1/user
 * @ACCESS PUBLIC 
 * 
 */
export const getAllUser = asyncHandler(async(req, res) => {
  // get all user 
   const users = await User.find({ status : true});


  // check user 
  if (users.length === 0) {
    res.status(404).json({ users : "", message : "Users Not Found"});
  };

  res.status(200).json({ users : users, message : "All users data"});
}); 
 

/**
 * @DESC GET SINGLE USER 
 * @METHOD GET
 * @ROUTE /api/v1/user/:id
 * @ACCESS PUBLIC 
 * 
 */
export const getSingleUser = asyncHandler(async(req, res) => {
  // get params 
  const { id } = req.params;

  // find single user
  const user = await User.findById(id); 

  if (!user) {
     return  res.status(404).json({ message : "Single User Data Not Found"});
  }

  res.status(200).json({user : user, message : "Single User Data"});
}); 

/**
 * @DESC CREATE USER 
 * @METHOD POST
 * @ROUTE /api/v1/user
 * @ACCESS PUBLIC 
 * 
 */
export const createUser = asyncHandler(async(req, res) => {
    // get form data 
    const { name, email, phone, password } = req.body;

    // validation 
    if (!name || !email || !phone || !password) {
      res.status(400).json({ users : "", message : "All fileds are required"});
    };

    // hash password 
    const hassPass = await bcrypt.hash(password, 10);
    
   // check valid email 
   if (!isEmail(email)) {
     return  res.status(400).json({users : "", message : "Invalid Email Address"});
   };

   // check valid phone number 
   if (!isMobile(phone)) {
     return  res.status(400).json({users : "", message : "Invalid Phone Number"});
   };

    // check email existance
    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      res.status(400).json({ users : "", message : "Email Already Exisits"});
    };



    // phone number check 
    const phoneCheck = await User.findOne({ phone });

    if (phoneCheck) {
      res.status(400).json({ users : "", message : "Phone Number Already Exisits"});
    };

   // photo manage 
    let filedata = null;

   if(req.file){
    const data = await fileUploadToCloud(req.file.path)
    filedata = data.secure_url;
   }; 

   // create user 
   const user = await User.create({ name, email, phone, password : hassPass, photo : filedata  });

   // create token 
   const token = await jwt.sign({ name, email}, process.env.JWT_SECRET , {expiresIn : "10d"});
  


   res.status(201).json({ message : "User Created Successfull",  users : user, token });
});


/**
 * @DESC DELETE USER 
 * @METHOD DELETE
 * @ROUTE /api/v1/user/:id
 * @ACCESS PUBLIC 
 * 
 */
export const deleteUser = asyncHandler(async(req, res) => {
   // get params 
   const { id } = req.params;

   // delete user data 
   const user = await User.findByIdAndDelete(id);

   // delete cloud file
    await fileDeleteFromCloud(findPublicId(user.photo));

   // delete data 
   res.status(400).json({ user, message : "User deleted successfull"});

});  


/**
 * @DESC UPDATE USER 
 * @METHOD PUT / PATCH 
 * @ROUTE /api/v1/user/:id
 * @ACCESS PUBLIC 
 * 
 */
export const updateUser = asyncHandler(async(req, res) => {
   // get params data
   const { id } = req.params;

   // get body data
   const { name, email, phone } = req.body;

    // check valid email 
      if (!isEmail(email)) {
        return  res.status(400).json({users : "", message : "Invalid Email Address"});
      };
   
    // check valid phone number 
      if (!isMobile(phone)) {
        return  res.status(400).json({users : "", message : "Invalid Phone Number"});
      };

   // update user
  const updateUser = await User.findByIdAndUpdate(id, {name, email, phone}, {new : true});

  
  res.status(400).json({ user : updateUser, message : "User Data updated Successfull"});
}); 
























