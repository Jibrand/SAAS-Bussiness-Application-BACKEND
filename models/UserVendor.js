import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
 
  email:String,
  password:String,
  name:String,
  

 

});

export default mongoose.model("userVendor", userSchema);
