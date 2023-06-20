import express from "express";
import {
  getProducts,
  createPost,
  CHECKHOWMANYVENDORS,
  viewUserProfile,
  updatepost,
  deletepost,
  updateproduct,
  getProductbyemail,
  deleteproduct,
  getProduct,
  getProduct1,
  getProductsCount,
  getThisMonthRecord

} from "../controllers/Vendor_QuoteN.js";

const router = express.Router();
import auth from "../middleware/authv.js";


// router.get("/count/:id", CHECKHOWMANYVENDORS



// router.get("/count/:id", 
router.get("/count/:id", CHECKHOWMANYVENDORS);
router.get("/", getProducts);
router.get("/count", getProductsCount); 
router.get("/getThisMonthRecord", getThisMonthRecord);
router.post("/", createPost);
router.get("/:id", getProduct);
router.get("/1/:id", getProduct1);
router.get("/view/:id", viewUserProfile);
router.put("/:id",updatepost);
router.get("/search/:email", getProductbyemail);
// router.get("/add", addd)
// router.post("/", createexcel)
router.patch("/:id", updateproduct);
router.delete("/:id", deletepost);

export default router;
