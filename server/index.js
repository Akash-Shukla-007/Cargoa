const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const AuthRoutes = require("./routes/AuthRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use("", AuthRoutes);

const dburl = "mongodb://127.0.0.1:27017/";
mongoose.connect(dburl + "cargoa");
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => {
  console.log("DB connected");
  app.listen(process.env.PORT, () => {
    console.log(`server running at port ${process.env.PORT}`);
  });
});
