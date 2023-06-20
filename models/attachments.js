import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  files: String,
  title:String,
  userid :String,
  clickhere:String,
  Dates  :String,
  inputFields:[{
    

    firstName:String,
    id:String,
lastName:String,
  }]
});

export default mongoose.model("attachments", userSchema);
 