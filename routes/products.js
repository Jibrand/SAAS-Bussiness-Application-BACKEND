import express from "express"
import { getProducts, createPost, updateproduct, addd,createexcel,deleteproduct, getProduct } from "../controllers/products.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getProducts)
router.get("/:id", getProduct)
// router.get("/add", addd)
router.post("/", createPost)
// router.post("/", createexcel)
router.patch('/:id', updateproduct)
router.delete('/:id', deleteproduct)



export default router;