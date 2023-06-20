import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  counter_id: {
    type: Number,
  }
 
});

export default mongoose.model("CounterNewProducts", userSchema);
