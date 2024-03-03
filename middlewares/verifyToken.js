import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { isEmail, isMobile } from "../helpers/helper.js";

// create verify token 
const verifyToken = (req, res, next) => {
    // get cookie 
    const accessToken = req.cookies.accessToken;

    // check token
    if (!accessToken) {
      return res.status(400).json({  message : "Unauthorized"}); 
    }; 

    // verify token user
    jwt.verify(accessToken, process.env.USER_LOGIN_SECRET, 
      asyncHandler(async(error, decode) => {
         
        if (error) {
           return res.status(400).json({ message : "Invalid Token"})
        }

       // get login user data 
       let me = null;

       if (isEmail(decode.auth)) {
           me = await User.findOne({ email : decode.auth}).select("-password");

       }else if(isMobile(decode.auth)){
          me = await User.findOne({ phone : decode.auth}).select("-password");  

       }else{
         return res.status(400).json({ message : "Invalid user"})
       }

      req.me = me;

      next(); 

      })
      );
  

  }

// export default 
export default verifyToken;
















