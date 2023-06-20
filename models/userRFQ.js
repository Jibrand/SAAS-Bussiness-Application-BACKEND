import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  rfq_id: String,
  rfq_name: String,
  name: String,
  Company_Name: String,
  email:String,
  to: String, 
  Work_Phone: String,
  END_DATE: String,
  START_DATE: String,
  First_Name: String, 
  Last_Name: String,
  Month:String,
  Dates: {
    type: String,
    default: new Date() ,
  },
  vendordetails: String,
  approver: String,
  description: String,
  status: String,
  file: String,
  fileName: String,

  IsVendorAddedQuote:String,

  inputFields:[{
    

    firstName:String,
    id:String,
lastName:String,
  }],


  First_Name:String,
Last_Name:String,
Email:String,
Phone_Number:String,
Legal_Entity_Name_for_PO:String,
Address:String,
City:String,
State:String,
Zip:String,
Country:String,
Total_Quote_Amount:String,
Quote_Expiration_Date:String,
VendorRFQId:String,

});

export default mongoose.model("userRFQ_Manager", userSchema);
