const validator = require("validator");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const careerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    Address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please prodive your email address"],
      validate: [validator.isEmail, "Please provide a valid email address"],
      lowercase: true,
    },
    coverLatter: {
      type: String,
      required: [true, "Cover Latter is required"],
      trim: true,
    },
    cv: {
      type: String,
      required: [true, "CV is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Career = model("Career", careerSchema);

module.exports = Career;
