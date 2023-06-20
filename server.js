import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from "cors";
import dotenv from "dotenv";
import  pdf from 'html-pdf'
import nodemailer from "nodemailer";
import multer from "multer";
import csvModel from "./models/products.js";
import csv from "csvtojson";
import { Server } from "socket.io";
import { createServer } from "http";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
import postRoutes from "./routes/products.js";
import userRFQ from "./routes/userRFQ.js";
import userRouter from "./routes/user.js";
import CommentRouter from "./routes/Comments.js";
import CommentForApprover from "./routes/CommentForApprover.js"; 
import pofinal from "./routes/pofinal.js";
import rfqRouter from "./routes/RFQ_Manager.js";
import attachments from "./routes/attachments.js";
import po from "./routes/po.js";
import Generate_Po from "./routes/Generate_Po.js";
import poattachments from "./routes/poattachments.js";
import message from "./routes/message.js";
import MASproductCategory from "./routes/MASproductCategory.js";
import MAS_WDH from "./routes/MAS_WDH.js";
import MASapplicationStandard from "./routes/MASapplicationStandard.js";
import ClientQuote from "./routes/ClientQuote.js";
import ClientQuoteProduct from "./routes/ClientQuoteProduct.js";
import VendorQuote from "./routes/VendorQuote.js";
import http from 'http'
import Consulting from "./routes/Consulting.js";
import New_Product from "./routes/NewProduct.js";
import VendorQuoteN from "./routes/Vendor_QuoteN.js";
import userVendor from "./routes/userVendor.js";
import CounterNewProducts from "./routes/CounterNewProducts.js";
import Change from "./routes/Change.js";
dotenv.config();
const app = express(); 
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use( '/uploads',express.static('uploads'));

app.use("/products", postRoutes);
app.use("/attachmentforapprover", po);
app.use("/generatepo", Generate_Po);
app.use("/poattachments", poattachments);
app.use("/attachments", attachments);
app.use("/commentrouter", CommentRouter);
app.use("/CommentForApprover", CommentForApprover);
app.use("/MASproductCategory", MASproductCategory); 
app.use("/message", message);
app.use("/MAS_WDH", MAS_WDH);
app.use("/MASapplicationStandard", MASapplicationStandard);
app.use("/rfqmanagers", rfqRouter);
app.use("/pofinal", pofinal);
app.use("/userrfq", userRFQ);   
app.use("/vendorquote", VendorQuote);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/clientquote", ClientQuote);
app.use("/clientQuoteproduct",ClientQuoteProduct );
app.use("/consulting",Consulting );
app.use("/newproducts",New_Product );
app.use("/VendorQuoteN",VendorQuoteN ); 
app.use("/userVendor",userVendor );
app.use("/CounterNewProducts",CounterNewProducts );
app.use("/change",Change );















 
// app.get("/", (req, res) => res.status(200).send("Heccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccllo world"));
 

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var uploads = multer({ storage: storage });

const PORT = process.env.PORT || 5005;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static folder
 
 
//default pageload
app.get("/add", (req, res) => {
  csvModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data != "") {
        res.status(200)
      } else {
        res.status(200)
      }
    }
  });
});

var temp;

app.post("/uploadfile", uploads.single("file"), (req, res) => {
  let  file  =( req.file)?req.file.filename:null;
  console.log("request.pppppppppppp1pfile",req.file.path)
  console.log("request.pppppppppppp1pfile",req.file.path)
  console.warn("request.pppppppppppp1pfile",req.file.path)
  console.log("request.pppppppppppp1pfile",req.file.path)
  console.log("request.pppppppppppp1pfile",req.file.path)


  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      console.log(jsonObj);
      for (var x = 0; x < jsonObj; x++) {
        // temp = parseFloat(jsonObj[x].Test1)
        // jsonObj[x].Test1 = temp;
        // temp = parseFloat(jsonObj[x].Test2)
        // jsonObj[x].Test2 = temp;
        // temp = parseFloat(jsonObj[x].Test3)
        // jsonObj[x].Test3 = temp;
        // temp = parseFloat(jsonObj[x].Test4)
        // jsonObj[x].Test4 = temp;
        // temp = parseFloat(jsonObj[x].Final)
        // jsonObj[x].Final = temp;
      }
      csvModel.insertMany(jsonObj, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.warn('the file is uploded')
        }
      });
    });
});

const CONNECTION_URL =
  "mongodb+srv://MuhammadJibran:jibran890@cluster0.6ujeevy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.CONNECTION_URL, () => {
  console.log("database connected");
});
mongoose.con;

const server = app.listen(PORT, () => console.log("Listening on port ", PORT));
 

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods:["GET","POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`)

//   socket.on("send_Message",(data)=>{
//   console.log(`User Message:   `,data)
//   socket.broadcast.emit("receive_Message",data)

//   })

   
//   // global.chatSocket = socket;
//   // socket.on("add-user", (userId) => {
//   //   onlineUsers.set(userId, socket.id);
//   // }
//   // );

//   // socket.on("send-msg", (data) => {
//   //   const sendUserSocket = onlineUsers.get(data.to);
//   //   if (sendUserSocket) {
//   //     socket.to(sendUserSocket).emit("msg-recieve", data.msg);
//   //   }
//   // });
// });



















const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  socket.on("send_message_approver", (data) => {
    socket.to(data.room).emit("receive_message_approver", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/
 