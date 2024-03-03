
import express from "express"
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
import { userPhoto } from "../utilis/multer.js";


// init router from express
const router = express.Router();



// user routes 
router.route("/").get(getAllUser).post(userPhoto, createUser);
router.route("/:id").delete(deleteUser).patch(updateUser).put(updateUser);
router.route("/:id").get(getSingleUser);



// export defult router 
export default router;

















