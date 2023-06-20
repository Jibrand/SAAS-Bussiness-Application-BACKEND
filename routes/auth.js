import {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  updateproduct,
  getuser
} from "../controllers/userController.js"
import express from "express"

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.put("/update/", updateproduct); 
router.get("/getuser/", getuser);

  
export default router;
