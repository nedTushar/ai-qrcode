const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
