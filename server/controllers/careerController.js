const category = require("../models/categoryModel");
const Product = require("../models/productModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const { deleteUploadedImages } = require("../middlewares/photoMiddleware");
const { getAll } = require("./handleFactory");
const Career = require("../models/careerModel");

exports.createCareerController = catchAsync(async (req, res, next) => {
  const body = { ...req.body };
  try {
    const career = await Career.create(body);

    res.status(201).json({
      status: "success",
      message: "Career form has been uploaded successfully",
      data: { career },
    });
  } catch (error) {
    return next(error);
  }
});

exports.getAllCareerController = getAll(Career);

exports.deleteCareerController = catchAsync(async (req, res, next) => {
  const { id } = req.params; // Career applicant

  const career = await Career.findById(id);
  if (!career) {
    return next(new AppError("No applicant found with this ID!", 404));
  }

  // Career delete
  await career.deleteOne();

  res.status(204).json({
    status: "success",
    message: "Career applicant deleted successfully",
    data: null,
  });
});
