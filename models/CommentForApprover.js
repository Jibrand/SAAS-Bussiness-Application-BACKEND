import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  comment: String,
  currentMessage:String,
  username:String,
  time:String,
  name:String,
  userid: String,
});

export default mongoose.model("CommentForApprover", userSchema);
