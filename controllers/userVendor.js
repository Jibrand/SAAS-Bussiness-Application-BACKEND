import mongoose from "mongoose";
import products from "../models/UserVendor.js";
import { sendEmail } from "./sendEmail.js";
import nodemailer from "nodemailer";

export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// router.get("/count/:id", CHECKHOWMANYVENDORS

export const CHECKHOWMANYVENDORS = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await products.find({ rfq_id: id });
    const count = product.length;
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletepost = async (req, res) => {
  let result = await products.deleteOne(
    { email: req.params.id },
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
export const updatepostbyrrfqid = async (req, res) => {
  let result = await products.updateOne(
    { rfq_id: req.params.id },
    { $set: req.body }
  );

  res.send(result);
};
// export const createPost = async (req, res) => {
//   let newproductpost = new products(req.body);

//   let result = await newproductpost.save();
//   res.send(result);
// };
export const createPost = async (req, res) => { 
 
  const { email } = req.body;
 
  const { name } = req.body;
 

  let newproductpost = new products(req.body);
  let result = await newproductpost.save();
  console.log(result._id)

  console.log(email);
 
  res.send(result);

  const send_to = email;
  const sent_from = "muhammadjibran890@gmail.com";
  const reply_to = "muhammadjibran890@gmail.com";
  const subjecta = "Reset your Password "; 
  const message = `
        <h3>Hello ${name}</h3>
        <p>so do you want to rest the password, here is token:  ${result._id}. Please go and rest your password at       "http://54.37.6.229:3000/34234234Tok34234ensdddsafd232344sasda4234243sdasdasaD131sasdkbehj12h124hj12f3g4f3hjvbnv32ghda" </p>
        <p>Regards...</p>
        <p>Muhammad Jibran</p>
    `;

  await sendEmail(subjecta, message, send_to, sent_from, reply_to);
 



















};



 
export const CheckID =  async (req, res) => {
   
    const product = await products.findById(req.params.id);

    if (!product) {
      return res.status(404).send('Product not found');
    }

    res.json(product);







  
}


  



 






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
  let result = await products.find({ email: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};

export const getProduct1 = async (req, res) => {
  let result = await products.find({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};


export const viewUserProfile = async (req, res) => {
  let result = await products.find({ _id: req.params.id });
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
  console.log(req.params.email);
  let data = await products.find({
    $or: [{ to: { $regex: req.params.email } }],
  });
  res.send(data);
};
export const getThisMonthRecord = async (req, res) => {
  console.log(req.params.email);
  let data = await products.find({
    $or: [{ Month: { $regex: new Date().getMonth() } }],
  });
  res.send(data);
};
// let result = await products.find({ to: req.params.id });
// if (result) {
//   res.send(result);0
// } else {
//   res.send({ result: "No Record Find" });
// }
 

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
export const updateproductbyrfqid = async (req, res) => {
  const { id: rfq_id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(rfq_id))
    return res.status(404).send("No post with that id");

  // {...post,_id}
  const updatedproduct = await products.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedproduct);
};
export const getProductsCount = async (req, res) => {
  try {
   
    const postMessages = await products.find().count();
 
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const deleteproduct = async (req, res) => {
   
};


export const CheckUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  console.log(password)
  try {
    const oldUser = await products.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await products.findOne (password );
    const isPasswordCorrectStatus =   password==isPasswordCorrect

    if (!isPasswordCorrectStatus) return res.status(400).json({ message: "Invalid credentials" });

    console.log("authirizes")

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "some went wrong" });
    console.log(" not authirizes")

  }
};