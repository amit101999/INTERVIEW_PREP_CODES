const rateLimit = require("express-rate-limit");

const express = require("express");
const app = express();

// this is standard rate limiter which uses IP address to limit the request but we can also
// limit the request based on user which is more secure
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "too many requests",
  standardHeaders: true,
  legacyHeaders: false,
});

// for global rate limiter
// app.use(limiter);

// for route based rate limiter
app.get("/", limiter, (req, res) => {
  res.status(200).send("hello");
});

// user specific rate limiter

app.listen(6500, () => {
  console.log("server is running on port 5000");
});
