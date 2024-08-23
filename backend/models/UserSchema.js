const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_password: {
    type: String,
  },

  confirm_password: {
    type: String,
  },

  phone_number: {
    type: Number,
    unique: true,
  },

  otp: {
    code: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Date,
      default: null,
    },
  },
});
const UsersCollection = mongoose.model("users", userSchema);
module.exports = UsersCollection;
