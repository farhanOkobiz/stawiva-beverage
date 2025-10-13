// const slugify = require("slugify");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    productId: {
      type: String,
      unique: true,
      default: function () {
        const now = new Date();
        const year = now.getFullYear().toString().slice(-2);
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const uniquePart = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
        return `PRO-${year}${month}${day}${uniquePart}`;
      },
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    details: {
      type: String,
      required: [true, "Details are required"],
      trim: true,
    },
    photos: [
      {
        type: String,
        required: [true, "Minimum one photo is required"],
        trim: true,
      },
    ],
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Brand ID is required"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category ID is required"],
    },
    // Packaging Options (array of objects: { type, sizes })
    packaging: [
      {
        type: {
          type: String,
          trim: true,
        },
        sizes: [
          {
            type: String,
            trim: true,
          },
        ],
      },
    ],
    //  Main Ingredients
    mainIngredients: [
      {
        type: String,
        trim: true,
      },
    ],
    //  Shelf Life
    shelfLife: {
      type: String,
      trim: true,
      default: "24 months",
    },
    //  Certifications
    certifications: [
      {
        type: String,
        trim: true,
      },
    ],

    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const Product = model("Product", productSchema);

module.exports = Product;
