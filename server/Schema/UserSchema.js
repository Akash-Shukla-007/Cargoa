const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    manufacturerRole: {
      type: Boolean,
    },
    companyName: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserModel);
module.exports = User;
