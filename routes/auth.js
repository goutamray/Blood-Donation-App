
import express from "express"
import { registerUser, accountActivateByOTP, login, getLoggedInUser, logout } from "../controllers/authController.js";
import verifyToken from "../middlewares/verifyToken.js";



// init router from express  
const router = express.Router();

// routes 
router.post("/register", registerUser);
router.post("/login", login);
router.post("/account-activate-by-otp/:token", accountActivateByOTP);
router.get("/me",verifyToken, getLoggedInUser);
router.post("/logout", logout);


// export defult router 
export default router;











