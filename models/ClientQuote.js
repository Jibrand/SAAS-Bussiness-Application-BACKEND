import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({

 

  name: String,
  status: String,
  note: String,
  date:String,
  expirydate: String,
  vendorid: String,
  id: String,
  file: String,
  color:String,
  Qoute_Name: String,
  Qoute_ExpiryDate: String,
});

export default mongoose.model("ClientQuote", userSchema);
