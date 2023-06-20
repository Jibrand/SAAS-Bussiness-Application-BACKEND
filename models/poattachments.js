import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    name:String,
    pdf1:String,
heading:String,
product:String,
price:String,
quantity:String,
file:String,
vendorid:String,
});

export default mongoose.model("poattachments", userSchema);
