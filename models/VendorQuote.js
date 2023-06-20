
import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
   
    name:String,
    status:String,
    note:String,
    date:String,
    expirydate:String,
    vendorid:String,
});

export default mongoose.model("Vendor_Quote", userSchema);
