const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  orderId: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  address: {
    type: String,
  },
  transporter: {
    type: String,
  },
  reply: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderModel);
module.exports = Order;
