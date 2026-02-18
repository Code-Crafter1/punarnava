const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/punarnava");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userSchema);
