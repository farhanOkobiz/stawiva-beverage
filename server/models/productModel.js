// const slugify = require("slugify");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    productId: {
      type: String,
      required: [true, "Product ID is required"],
      unique: true,
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
    // Packaging Options (array for flexibility)
    packaging: [
      {
        type: String,
        trim: true,
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

productSchema.pre("save", async function (next) {
  if (!this.productId) {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 10
    const day = String(now.getDate()).padStart(2, "0"); // 13

    // unique 4-digit random or time-based number
    const uniquePart = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    this.productId = `PRO-${year}${month}${day}${uniquePart}`;
  }

  next();
});

const Product = model("Product", productSchema);

module.exports = Product;
