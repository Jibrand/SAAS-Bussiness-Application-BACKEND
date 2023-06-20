

import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
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

export default mongoose.model("Vendor_Quote_N", userSchema);
