const express = require("express");
const app = express();
const port = 5000;
const DOTENV = require("dotenv");
DOTENV.config();
const Razorpay = require("razorpay");
const CORS = require("cors");
app.use(CORS());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/order", (req, res) => {
  res.send("Get Orders");
});
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
app.post("/order", async (req, res) => {
  const { price } = req.body;
  if (!price) {
    return res
      .status(500)
      .json({ success: false, message: "Amount can't be empty" });
  }
  const response = await instance.orders.create({
    amount: Number(price) * 100,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  return res
    .status(200)
    .json({ success: true, message: "order sent", response });
});
