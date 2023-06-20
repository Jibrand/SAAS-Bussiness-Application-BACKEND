import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    name: String,
  
});

export default mongoose.model("MASWDH", userSchema);
