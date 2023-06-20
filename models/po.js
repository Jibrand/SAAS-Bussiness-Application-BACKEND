import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    to: String,
 color:String,
 status:String,
  file :String,
  id:String,
});

export default mongoose.model("attachmentforapprover", userSchema);
