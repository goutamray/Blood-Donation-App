
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { mongoDbConnection } from "./config/mongodb.js";
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"

import { errorHandler } from "./middlewares/errorHander.js";


// initialization 
dotenv.config();
const app = express();  

// invironment var 
const PORT = process.env.PORT || 6060;

// set middleware 
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:3000",
  credentials : true,
}));

// static folder 
app.use(express.static("public"));


// routes 
app.use("/api/v1/user", userRouter); 
app.use("/api/v1/auth", authRouter); 



// error handler 
app.use(errorHandler);    


// app listen 
app.listen(PORT, () => {
  mongoDbConnection(),
  console.log(` Server is running on port ${PORT}`.bgGreen.black);
})






























