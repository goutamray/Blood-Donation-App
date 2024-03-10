
import mongoose from "mongoose";

// create user schema
const userSchema = mongoose.Schema({
  name : {
    type: String,
    trim : true,
  }, 
  email : {
    type : String,
    trim : true, 
  },
  password : {
    type : String,
    trim : true, 
  },
  phone : {
    type : String,
    trim : true,
  },
  photo : {
    type : String,
    trim : true,
    default : null,
   },
  location : {
    type : String,
    trim : true,
    default : null,
   },
  profession : {
    type : String,
    trim : true,
    default : null,
   },
  bio : {
    type : String,
    trim : true,
    default : null,
   },
  bloodGroup : {
    type : String,
    trim : true,
    default : null,
   },
  lastDonate : {
    type : String,
    trim : true,
    default : null,
   },
  gallery : {
    type : String,
    trim : true,
    default : null,
   },
   role : {
    type : String, 
    default : "patient",
    enum : ["patient", "doner", "admin"], 
   },
  accessToken : {
    type : String,
    default : null,
  },
  isVerified : {
     type : Boolean,
     default : false,
  },
  isActivated : {
    type : Boolean,
    default : false,
  },
  gender : {
    type : String,
    default : null,
    enum : ["Male", "Female", "Custom"]
  },
 status : {
     type : Boolean,
     default : true,
  },
  trash : {
    type : Boolean,
    default : false,
  }

},
{
  timestamps : true,
}
);



//export default 
export default mongoose.model("User", userSchema)



















