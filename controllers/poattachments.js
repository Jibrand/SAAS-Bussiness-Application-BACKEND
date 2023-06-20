import mongoose from "mongoose";
import products from "../models/poattachments.js"
import { sendEmail } from "./sendEmail.js";
import easyinvoice from "easyinvoice"
import Task from "../models/Task.js";
import TaskList from "../models/TaskList.js";
 
import fs from 'fs'
import nodemailer from "nodemailer";
export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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
// export const createPost = async (req, res) => {
//   let newproductpost = new products(req.body);

//   let result = await newproductpost.save();
//   res.send(result);
// };
 

export const createPost = async (req, res) => {

  let newproductpost = new products(req.body);

  let result = await newproductpost.save();
  res.send(result);
 





};
export const createPostwithEasyInvoice1111 = async (req, res) => {var taskObj = new Task({   date: req.body.formData.date, descripition: req.body.formData.description });
taskObj.save(function (err, task) {
  var array = new Array();
  if (err) return res.status(400).json({ err: err })
  if (task) {
    req.body.formData.taskList.map((taskList, index) => {

       array.push(taskList.projectName)
      var taskListObj = new TaskList({
        projectName: taskList.projectName,
        task: taskList.task,
        taskNotes: taskList.taskNotes,
        taskStatus: taskList.taskStatus
      });
      console.log(">>>>HEIGHT",array)
      console.log(array);
for(var i=0;i<array.length;i++){
    console.log("/.................",array[i]);
}

      var data = {
      
        
        // Customize enables you to provide your own templates
        // Please review the documentation for instructions and examples
        "customize": {
            //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
        },
        "images": {
            // The logo on top of your invoice
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
            // The invoice background
            
        },
        // Your own data
        "sender": {
            "company": 'taskList.projectName',
            "address": "Sample Street 123",
            "zip": "1234 AB",
            "city": "Sampletown",
            "country": "Samplecountry"
            //"custom1": "custom value 1",
            //"custom2": "custom value 2",
            //"custom3": "custom value 3"
        },
        // Your recipient
        "client": {
            "company": "Client Corp",
            "address": "Clientstreet 456",
            "zip": "4567 CD",
            "city": 'projectName',
            "country": "inputList"
            // "custom1": "custom value 1",
            // "custom2": "custom value 2",
            // "custom3": "custom value 3"
        },
        "information": {
            // Invoice number
            "number": "2021.0001",
            // Invoice data
            "date":'',
            // Invoice due date
            "due-date": "31-12-2021"
        },
        // The products you would like to see on your invoice
        

      
        "products": [
         
            {
             
       
                "quantity": 4.1,
                "description":   array[i],
                "tax-rate": 6,
                "price": 12.34
            }
            
        ],
        // The message you would like to display on the bottom of your invoice
        "bottom-notice": "Kindly pay your invoice within 15 days.",
        // Settings to customize your invoice
        "settings": {
            "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
            // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
            // "tax-notation": "gst", // Defaults to 'vat'
            // "margin-top": 25, // Defaults to '25'
            // "margin-right": 25, // Defaults to '25'
            // "margin-left": 25, // Defaults to '25'
            // "margin-bottom": 25, // Defaults to '25'
            // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
            // "height": "1000px", // allowed units: mm, cm, in, px
            // "width": "500px", // allowed units: mm, cm, in, px
            // "orientation": "landscape", // portrait or landscape, defaults to portrait
        },
        // Translate your invoice to your preferred language
        "translate": {
            // "invoice": "FACTUUR",  // Default to 'INVOICE'
            // "number": "Nummer", // Defaults to 'Number'
            // "date": "Datum", // Default to 'Date'
            // "due-date": "Verloopdatum", // Defaults to 'Due Date'
            // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
            // "products": "Producten", // Defaults to 'Products'
            // "quantity": "Aantal", // Default to 'Quantity'
            // "price": "Prijs", // Defaults to 'Price'
            // "product-total": "Totaal", // Defaults to 'Total'
            // "total": "Totaal" // Defaults to 'Total'
        },
    }
     
      taskListObj.save((error, savedTask) => {
        if (err) {
          taskObj.deleteOne({ _id: task._id }, function (err) {
            return res.status(400).json({ err: error });
          });
          taskListObj.deleteOne({ taskId: task._id }, function (err) {
            return res.status(400).json({ err: error });
          });
          return res.status(400).json({ err: error });
        }

      })

  
      easyinvoice.createInvoice(data, async function (result) {
        //The response will contain a base64 encoded PDF file
         
   
        // console.log('PDF base64 string: ', result.pdf);
        await fs.writeFileSync("invoice.pdf",result.pdf,'base64')
      
      
      
      //Email
     
      
      });
    })
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "muhammadjibran890@gmail.com", // generated ethereal user
        pass: "srffpnbdmmgfpmgj", // generated ethereal password
      },
    
    });
    
    const options = {
      from: "muhammadjibran890@gmail.com",
      to: 'jibranjibran220@gmail.com',
      replyTo: "muhammadjibran890@gmail.com",
      subject: "New Request Fo Approval",
      html: `<h5>Hello Finance Manager,</h5>
    <p>there is a vendor which i like its Quotes, i send you for the approval, please update me.   </p>
    <p>Regards...</p>
    <p>Muhammad Jibran</p>` ,
      attachments: [
        {
    
          filename: `invoice.pdf`,
          content:  "",
          encoding: 'base64',
    
        }
      ]
    };
    
    
    transporter.sendMail(options, function (err, info) {
      if (err) {
       
      } else {
    
      }
    });
    
    return res.status(201).json({
      success: true,
      msg: "Task  Successfully Saved",
    });
  }
});}





  export const createPostwithEasyInvoice = async (req, res) => {

  let newproductpost = new products(req.body);
console.log("hadhjgdhaghdghjdgja")
console.warn("hadhjgdhaghdghjdgja")
  let inputList =req.body.firstName
  console.log(inputList)
  let result = await newproductpost.save();
 
 
  var data = {
    // Customize enables you to provide your own templates
    // Please review the documentation for instructions and examples
    "customize": {
        //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
    },
    "images": {
        // The logo on top of your invoice
        "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
        // The invoice background
        
    },
    // Your own data
    "sender": {
        "company": "name",
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    // Your recipient
    "client": {
        "company": "Client Corp",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": inputList
        // "custom1": "custom value 1",
        // "custom2": "custom value 2",
        // "custom3": "custom value 3"
    },
    "information": {
        // Invoice number
        "number": "2021.0001",
        // Invoice data
        "date": "12-12-2021",
        // Invoice due date
        "due-date": "31-12-2021"
    },
    // The products you would like to see on your invoice
    // Total values are being calculated automatically
    "products": [
        {
            "quantity": 2,
            "description": "inputL",
            "tax-rate": 6,
            "price": 33.87
        },
        {
            "quantity": 4.1,
            "description": "Product 2",
            "tax-rate": 6,
            "price": 12.34
        },
        {
            "quantity": 4.5678,
            "description": "Product 3",
            "tax-rate": 21,
            "price": 6324.453456
        }
    ],
    // The message you would like to display on the bottom of your invoice
    "bottom-notice": "Kindly pay your invoice within 15 days.",
    // Settings to customize your invoice
    "settings": {
        "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
        // "tax-notation": "gst", // Defaults to 'vat'
        // "margin-top": 25, // Defaults to '25'
        // "margin-right": 25, // Defaults to '25'
        // "margin-left": 25, // Defaults to '25'
        // "margin-bottom": 25, // Defaults to '25'
        // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
        // "height": "1000px", // allowed units: mm, cm, in, px
        // "width": "500px", // allowed units: mm, cm, in, px
        // "orientation": "landscape", // portrait or landscape, defaults to portrait
    },
    // Translate your invoice to your preferred language
    "translate": {
        // "invoice": "FACTUUR",  // Default to 'INVOICE'
        // "number": "Nummer", // Defaults to 'Number'
        // "date": "Datum", // Default to 'Date'
        // "due-date": "Verloopdatum", // Defaults to 'Due Date'
        // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
        // "products": "Producten", // Defaults to 'Products'
        // "quantity": "Aantal", // Default to 'Quantity'
        // "price": "Prijs", // Defaults to 'Price'
        // "product-total": "Totaal", // Defaults to 'Total'
        // "total": "Totaal" // Defaults to 'Total'
    },
};
easyinvoice.createInvoice(data, async function (result) {
  //The response will contain a base64 encoded PDF file
   
  console.log('PDF base64 string: ', result.pdf);
  await fs.writeFileSync("invoice.pdf",result.pdf,'base64')



//Email

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "muhammadjibran890@gmail.com", // generated ethereal user
    pass: "srffpnbdmmgfpmgj", // generated ethereal password
  },

});

const options = {
  from: "muhammadjibran890@gmail.com",
  to: 'jibranjibran220@gmail.com',
  replyTo: "muhammadjibran890@gmail.com",
  subject: "New Request Fo Approval",
  html: `<h5>Hello Finance Manager,</h5>
<p>there is a vendor which i like its Quotes, i send you for the approval, please update me.   </p>
<p>Regards...</p>
<p>Muhammad Jibran</p>` ,
  attachments: [
    {

      filename: `invoice.pdf`,
      content: result.pdf,
      encoding: 'base64',

    }
  ]
};


transporter.sendMail(options, function (err, info) {
  if (err) {
   
  } else {
 
  }
});


});


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
  let result = await products.find({ rfq_id: req.params.id });
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
    $or: [{ vendorid: { $regex: req.params.email } }],
  });
  res.send(data);
};
  // let result = await products.find({ to: req.params.id });
  // if (result) {
  //   res.send(result);
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

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await products.findByIdAndRemove(id);
  res.json({ message: "Post Deleted Sucessfully" });
};
