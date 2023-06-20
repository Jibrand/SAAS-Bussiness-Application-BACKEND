import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    pdf1:String,
    qty:String,
heading:String,
product:String,
price:String,
quantity:String,
file:String,
vendorid:String,
Dates: {
    type: Date,
    default: new Date().getMonth(),
  },
});

export default mongoose.model("ClientQuoteProduct", userSchema);
