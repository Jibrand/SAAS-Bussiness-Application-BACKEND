import express from "express";
import multer from   'multer'
import {
  getProducts,
  createPost,
  viewUserProfile,
  updatepost,
  deletepost,
  updateproduct,
  getProductbyemail,
  deleteproduct,
  getProduct,
  sendforapprover,
} from "../controllers/pofinal.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname )
  }
})

const upload = multer({ storage: storage })

const router = express.Router();
import auth from "../middleware/authv.js";

router.get("/", getProducts);
router.post("/",upload.single('file'), createPost);
router.get("/:id", getProduct);
router.get("/view/:id", viewUserProfile);
router.post("/sendapprover", sendforapprover);
router.put("/update/:id");
router.get("/search/:email", getProductbyemail);
// router.get("/add", addd)
// router.post("/", createexcel)
router.patch("/:id", updateproduct);
router.delete("/:id", deletepost);

export default router;
