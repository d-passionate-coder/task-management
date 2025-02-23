import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "task" }],
});

const User = mongoose.model("user", userSchema);
export default User;
