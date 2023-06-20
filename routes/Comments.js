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
} from "../controllers/Comments.js";

const router = express.Router();
import auth from "../middleware/authv.js";

router.get("/", getProducts);
router.post("/", createPost);
router.get("/:id", getProduct);
router.put("/:id", updatepost);
router.get("/search/:email", getProductbyemail);
// router.get("/add", addd)
// router.post("/", createexcel)
router.patch("/:id", updateproduct);
router.delete("/:id", deletepost);

export default router;
