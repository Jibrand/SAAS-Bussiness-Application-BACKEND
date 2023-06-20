import express from "express"
 import  {getProducts, getThisMonthRecord,getThisMonthRecordCount,createPost,getProductsCount, updatepost,deletepost,updateproduct, getProductbyemail,deleteproduct, getProduct} from "../controllers/RFQ_Manager.js"

const router = express.Router();
import auth from "../middleware/authv.js";

router.get("/", getProducts)
router.get("/count", getProductsCount) 
router.get("/getThisMonthRecord", getThisMonthRecord);
router.get("/getThisMonthRecordCount", getThisMonthRecordCount);

router.post("/", createPost)
router.get("/:id", getProduct)
router.put("/:id", updatepost)
router.get("/search/:email", getProductbyemail)
// router.get("/add", addd)
// router.post("/", createexcel)
router.patch('/:id', updateproduct)
router.delete('/:id', deletepost)



export default router;