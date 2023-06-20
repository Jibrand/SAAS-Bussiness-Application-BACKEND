import  mongoose  from"mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 1,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
   file: {
    type: String,
    default: "",
  },
});

const Users = mongoose.model("Users", userSchema);
export default Users
