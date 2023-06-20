import mongoose from "mongoose";
 

const userSchema = mongoose.Schema({
  username: String,
  time : String,
  username: String,
    date: {
        type: Date,
        default: new Date(),
      },
      currentMessage: String,
    rfqID:String,
  
});

export default mongoose.model("message", userSchema);
