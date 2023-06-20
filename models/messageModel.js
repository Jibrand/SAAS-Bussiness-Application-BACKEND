import mongoose  from"mongoose"

const MessageSchema = mongoose.Schema(
  {
    currentMessage: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
     file: {
    type: String,
    default: "",
  },
  },
  {
    timestamps: true,
  }
);


const Messages= mongoose.model("Messages", MessageSchema);
export default Messages
