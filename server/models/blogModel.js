const slugify = require("slugify");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A News & Event post must have a title"],
      trim: true,
      maxLength: [100, "News & Event title must not exceed 100 characters"],
    },
    content: {
      type: String,
      required: [true, "A News & Event post must have content"],
    },
    category: {
      type: String,
      required: [true, "A News & Event post must belong to a category"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "A News & Event post must have an author"],
    },
    tags: [
      {
        type: String,
        trim: true,
        required: [true, "A News & Event post must have at least one tag"],
      },
    ],

    photos: [
      {
        type: String,
        required: false,
        trim: true,
      },
    ],
    youtubeVideo: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "published", "archived"],
        message: "{VALUE} is not a valid status",
      },
      default: "draft",
    },

    publishedAt: Date,

    views: {
      type: Number,
      default: 0,
    },

    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// blogSchema.pre("save", function (next) {

//   this.slug = slugify(this.title, { lower: true, strict: true });

//   if (this.isModified("tags") && Array.isArray(this.tags)) {
//     this.tags = this.tags.map((tag) => tag.toLowerCase());
//   }

//   next();
// });

const Blog = model("Blog", blogSchema);

module.exports = Blog;
