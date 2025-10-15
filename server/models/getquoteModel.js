const validator = require("validator");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const getquoteSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      required: false,
    },
    country: {
      type: String,
      trim: true,
      required: false,
    },
    email: {
      type: String,
      required: [true, "Please prodive your email address"],
      validate: [validator.isEmail, "Please provide a valid email address"],
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
      require: false,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const GetQoute = model("GetQoute", getquoteSchema);

module.exports = GetQoute;
