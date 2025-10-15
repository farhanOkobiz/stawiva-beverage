const express = require("express");
const protectMiddleware = require("../../middlewares/protectMiddleware");
const restrictToMiddleware = require("../../middlewares/restrictToMiddleware");
const {
  createCareerController,
  getAllCareerController,
  deleteCareerController,
} = require("../../controllers/careerController");
const upload = require("../../utils/multerPDF");
const { cloudinaryUploadCV } = require("../../middlewares/cvMiddleware");

const router = express.Router();

router.post(
  "/",
  upload.single("cv"),
  cloudinaryUploadCV,
  createCareerController
);
// router.get("/:id", getContactController);

router.use(protectMiddleware);
router.use(restrictToMiddleware("admin"));

router.get("/", getAllCareerController);

router.delete("/:id", deleteCareerController);

module.exports = router;
