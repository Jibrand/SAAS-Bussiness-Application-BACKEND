import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({

 
 
    textInput: {
        type: String,
    
      },
      image: {
        type: String,
   
      }
    });

export default mongoose.model("Changeqw", userSchema);
