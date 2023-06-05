const express = require("express");
const User = require("../Schema/UserSchema");
const Order = require("../Schema/Orders");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    companyName: req.body.companyName,
    manufacturerRole: req.body.manufacturerRole,
  };

  await User.findOne({ email: user.email }).then((user) => {
    if (user) {
      return res.status(201).json({ user: user });
    } else {
      const newUser = new User({})
        .save()
        .then(() => res.json({ user: newUser }));
    }
  });
});

router.post("/new", async (req, res) => {
  try {
    const orders = {
      orderId: req.body.orderId,
      from: req.body.from,
      to: req.body.to,
      address: req.body.address,
      quantity: req.body.quantity,
      transporter: req.body.selectTransporter,
    };
    const newOrder = new Order(orders);
    await newOrder.save();
    return res.status(201).json({ Order: newOrder });
  } catch (err) {
    console.log(err);
  }
});

router.post("/mfetch", async (req, res) => {
  try {
    const foundOrder = await Order.find({
      to: req.body.email, // manufacurer email
    }).exec();
    return res.status(201).json({ Order: foundOrder });
  } catch (err) {
    console.log(err);
  }
});

router.post("/tfetch", async (req, res) => {
  try {
    const foundOrder = await Order.find({
      transporter: req.body.companyName,
    }).exec();
    return res.status(201).json({ Order: foundOrder });
  } catch (err) {
    console.log(err);
  }
});

router.post("/reply", async (req, res) => {
  try {
    const order = {
      orderId: req.body.orderId,
      from: req.body.companyName,
      to: req.body.to,
      price: req.body.price,
      reply: req.body.reply,
    };
    console.log(req.body);
    const orderReply = new Order(order);
    await orderReply.save();
    return res.status(201).json({ orderReply: orderReply });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
