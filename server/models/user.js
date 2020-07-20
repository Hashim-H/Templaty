const mongoose = require("mongoose");

const schema = {
  fullName: String,
  email: { type: String, lowercase: true },
  token: String,
  password: String,
  gender: String,
  googleId: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
};

module.exports = mongoose.model("User", schema);
