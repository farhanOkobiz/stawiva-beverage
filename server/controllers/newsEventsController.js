const AppError = require("../utils/AppError");
const BlogCategory = require("../models/blogCategoryModel");
const catchAsync = require("../utils/catchAsync");
const { deleteUploadedImages } = require("../middlewares/photoMiddleware");
const { getAll } = require("./handleFactory");
const generateSlug = require("../utils/slugGenerator");
const mongoose = require("mongoose");
const NewsEvents = require("../models/newsEventsModel");

// Helper to update BlogCategory by id, slug or title safely (avoids casting non-ObjectId strings)
const findCategoryAndUpdate = async (
  categoryIdentifier,
  update,
  options = { new: true }
) => {
  if (!categoryIdentifier) return null;
  if (mongoose.Types.ObjectId.isValid(String(categoryIdentifier))) {
    return BlogCategory.findOneAndUpdate(
      { _id: categoryIdentifier },
      update,
      options
    );
  }
  // try slug first, then case-insensitive title
  return BlogCategory.findOneAndUpdate(
    {
      $or: [
        { slug: categoryIdentifier },
        { title: { $regex: `^${categoryIdentifier}$`, $options: "i" } },
      ],
    },
    update,
    options
  );
};

exports.createNewsEventController = catchAsync(async (req, res, next) => {
  const body = { ...req.body };
  body.author = req.user.id;
  const title = body?.title;
  const slug = generateSlug(title);

  const publicIds = req.body.publicIds;
  body.photos = req.body.photos;
  body.slug = slug;

  try {
    const blog = await NewsEvents.create(body);

    await findCategoryAndUpdate(blog.category, { $push: { blogs: blog._id } });

    return res.status(201).json({
      status: "success",
      message: "News & Event has been created successfully",
      data: {
        blog,
      },
    });
  } catch (error) {
    await deleteUploadedImages(publicIds);
    return next(error);
  }
});

// newsEventsModel stores `category` as a plain string, so populating it will return undefined.
// Populate only `author` (which is an ObjectId reference) and leave `category` as-is.
exports.getAllNewsEventController = getAll(NewsEvents, {
  path: "author",
  select: "name",
});

exports.getNewsEventController = catchAsync(async (req, res, next) => {
  const { slug } = req.params;

  const blog = await NewsEvents.findOne({ slug })
    .populate("author", "name email role category")
    .select("-__v");
  if (!blog) {
    return next(new AppError("No blog was found with that name!", 404));
  }

  blog.views += 1;

  await blog.save();

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.updateNewsEventController = catchAsync(async (req, res, next) => {
  const { slug } = req.params;
  const body = { ...req.body };

  const blog = await NewsEvents.findOne({ slug });
  if (!blog) {
    return next(new AppError("No blog was found with that name", 404));
  }

  // Check if new photos have been uploaded
  if (req.body.photos && req.body.photos.length > 0) {
    body.photos = req.body.photos;
    body.publicIds = req.body.publicIds;

    // If new photos uploaded successfully, delete old ones
    if (blog.photos && blog.photos.length > 0) {
      const oldPhotos = blog.photos.map(
        (item) => item.split("/").slice(-4).join("/").split(".")[0]
      );

      await deleteUploadedImages(oldPhotos);
    }
  }

  if (body.status) {
    if (body.status === "published") {
      body.publishedAt = new Date();
    } else if (body.status === "archived") {
      body.publishedAt = null;
    }
  }

  Object.assign(blog, body);
  await blog.save();

  res.status(200).json({
    status: "success",
    message: "Blog has been updated successfully",
    data: {
      blog,
    },
  });
});

exports.deleteNewsEventController = catchAsync(async (req, res, next) => {
  const { slug } = req.params;

  const blog = await NewsEvents.findOne({ slug });
  if (!blog) return next(new AppError("No blog found with that name", 404));

  // Check if the blog has photos and delete them from Cloudinary
  if (blog.photos && blog.photos.length > 0) {
    const publicIds = blog.photos.map(
      (photoUrl) => photoUrl.split("/").slice(-4).join("/").split(".")[0]
    );

    await deleteUploadedImages(publicIds);
  }

  await findCategoryAndUpdate(blog.category, { $pull: { blogs: blog._id } });

  await NewsEvents.findByIdAndDelete(blog._id);

  res.status(204).json({
    status: "success",
    message: "Blog has been deleted successfully",
    data: null,
  });
});
