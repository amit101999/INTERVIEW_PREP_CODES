import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  passwrord: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user", "editor", "guest"],
  },
});

export default mongoose.model("User", userSchema);
