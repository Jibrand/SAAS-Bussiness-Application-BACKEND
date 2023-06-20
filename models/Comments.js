import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  comment: String,
  userida: String,
  rfq_id: String,
});

export default mongoose.model("Comments", userSchema);
