import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    Address_Under_Heading_Left: String,
    attn: String,
    Phone: String,
    Fax: String,
    state: String,
    Po_Number: String,
    Date: String,
    Payment_Terms: String,
    Shipping_Terms: String,
    Currency: String,
    Contract: String,
    Contact: String,
    Ship_To: String,
    attn_Under_ship_to:String,

    Bill_To: String,
Address_under_Bill_To:String,
attn_Under_Bill_to:String,
state_Under_Bill_to:String,
Vendor_Id:String,





    to: String,
  subject: String,
  body:String,
  file :String,
  id:String,
});

export default mongoose.model("generatepo", userSchema);
