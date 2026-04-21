import express from "express";
import jwt from "jsonwebtoken";
import User from "./models/User.js"; // Assuming you have a User model defined in models/User.js
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
// i can use middelware to verify but here i am going to verify in the route itself

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
