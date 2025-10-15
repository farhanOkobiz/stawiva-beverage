const AppError = require("../utils/AppError");
const { cloudinary } = require("../utils/cloudinaryConfig");

const cloudinaryUploadCV = (req, res, next) => {
  if (!req.file) return next();

  const uploadStream = cloudinary.uploader.upload_stream(
    { folder: "StaminaPlus/CVs", resource_type: "raw" },
    (error, result) => {
      if (error) return next(new AppError("CV upload failed", 500));
      req.body.cv = result.secure_url;
      next();
    }
  );

  uploadStream.end(req.file.buffer);
};

module.exports = { cloudinaryUploadCV };