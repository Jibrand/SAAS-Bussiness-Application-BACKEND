import express from "express";
import {
  getProducts,
  createPost,
  updatepost,
  deletepost,
  updateproduct,
  getProductbyemail,
  deleteproduct,
  getProduct,
  uploadImage,
  submitForm,
} from "../controllers/Change.js"; 
import multer from "multer";

const router = express.Router();
import auth from "../middleware/authv.js";


 

 
const upload = multer({ dest: 'uploads/' })


router.get("/" , getProducts);
router.post("/",upload.single('image'),  createPost);
router.get("/:id", getProduct);
router.put("/:id", updatepost);
router.get("/search/:email", getProductbyemail);
// router.get("/add", addd)
// router.post("/", createexcel)
router.patch("/:id", updateproduct);
router.delete("/:id", deletepost);

export default router;
