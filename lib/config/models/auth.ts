import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter full name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
