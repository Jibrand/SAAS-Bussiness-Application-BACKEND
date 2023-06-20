import express from "express"
 import  {getProducts, getThisMonthRecord,getThisMonthRecordCount,searchProducts,createPost,getProductsCount, sendemail1,updatepost,deletepost,updateproduct, getProductbyemail,deleteproduct, getProduct} from "../controllers/NewProduct.js"
const router = express.Router();
import auth from "../middleware/authv.js";

router.get("/", getProducts)
router.get("/count", getProductsCount) 
router.get("/getThisMonthRecord", getThisMonthRecord);
router.get("/getThisMonthRecordCount", getThisMonthRecordCount); 

router.post("/", createPost)
router.post("/send", sendemail1)
router.get("/:id", getProduct)
router.get("/search/d", searchProducts)
router.put("/:id", updatepost)
router.get("/search/:email", getProductbyemail) 
// router.get("/add", addd) 
// router.post("/", createexcel)
router.patch('/:id', updateproduct)
router.delete('/:id', deletepost)

 

export default router;