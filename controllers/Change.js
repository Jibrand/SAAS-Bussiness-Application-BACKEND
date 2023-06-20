import mongoose from "mongoose";
import products from "../models/Change.js";
import { sendEmail } from "./sendEmail.js";
import nodemailer from "nodemailer";
import multer from 'multer'
import path from 'path'
 

export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

export const uploadImage = async (req, res) => {
  const { textInput } = req.body;
  const { filename } = req.file;

  try {
    const textImage = new TextImage({
      textInput,
      image: filename
    });

    const savedTextImage = await textImage.save();

    res.json({
      success: true,
      message: 'Text and image uploaded successfully',
      data: savedTextImage
    });
  } catch (error) {
    next(error);
  }
};

// app.post('/api/upload', upload.single('imageFile'), (req, res) => {
//   console.log(req.file);
//   res.json({ success: true });
// });

export const deletepost = async (req, res) => {
  let result = await products.deleteOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(req.params);
};

export const updatepost = async (req, res) => {
  let result = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(result);
};
 
export const submitForm = async (req, res) => {
  
};

export const createPost = async (req, res) => {
  console.log(req.body, req.file)

  const textInput=req.body.textInput
  const image=req.file.path
 
  let newproductpost = new products({textInput:textInput,image:image});

  let result = await newproductpost.save();
  res.send(result);
};

export const addd = async (req, res) => {
  const postMessages = req.body;
  console.warn(postMessages);
};

export const createexcel = async (req, res) => {
  csvtojson();
  const productpost = req.body;
  const newproductpost = new products(productpost)
    .fromFile(productpost)
    .then((csvData) => {
      console.log(csvData);
      products
        .insertMany(csvData)
        .then(function () {
          console.log("Dta is inserted");
          res.json({ success: "success" });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
};

export const getProduct = async (req, res) => {
  let result = await products.findOne({ rfq_id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};
//  export const getProductbyemail = async (req, res) => {

//     let result = await products.findOne({ to: req.params.to })
//     if (result) {
//         res.send(result)
//     } else {
//         res.send({ "result": "No Record Find" })
//     }

// }
export const getProductbyemail = async (req, res) => {
 
  let data = await products.find({
    $or: [{  rfq_id: { $regex: req.params.email } }],
  });
  res.send(data);
};

export const updateproduct = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  // {...post,_id}
  const updatedproduct = await products.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedproduct);
};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await products.findByIdAndRemove(id);
  res.json({ message: "Post Deleted Sucessfully" });
};
