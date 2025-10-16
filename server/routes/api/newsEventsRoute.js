const express = require("express");
const protectMiddleware = require("../../middlewares/protectMiddleware");
const restrictToMiddleware = require("../../middlewares/restrictToMiddleware");
const {
  uploadPhotoMiddleware,
  cloudinaryUploadMiddleware,
} = require("../../middlewares/photoMiddleware");


const {
  createNewsEventController,
  getAllNewsEventController,
  updateNewsEventController,
  deleteNewsEventController,
  getNewsEventController,
} = require("../../controllers/newsEventsController");

const router = express.Router();

router.get("/", getAllNewsEventController);
router.get("/:slug", getNewsEventController);

router.use(protectMiddleware);
router.use(restrictToMiddleware("admin"));
router.use(
  uploadPhotoMiddleware(true, 4),
  cloudinaryUploadMiddleware("blog", "photos")
);

router.post("/", createNewsEventController);
router
  .route("/:slug")
  .patch(updateNewsEventController)
  .delete(deleteNewsEventController);

module.exports = router;
