const express = require("express");
const protectMiddleware = require("../../middlewares/protectMiddleware");
const restrictToMiddleware = require("../../middlewares/restrictToMiddleware");
const {
  createGetQuoteController,
  getGetQuoteController,
  getAllGetQuoteController,
  updateGetQuoteController,
  deleteGetQuoteController,
} = require("../../controllers/getquoteController");

const router = express.Router();

router.post("/", createGetQuoteController);
router.get("/:id", getGetQuoteController);

router.use(protectMiddleware);
router.use(restrictToMiddleware("admin"));

router.get("/", getAllGetQuoteController);

router
  .route("/:id")
  .patch(updateGetQuoteController)
  .delete(deleteGetQuoteController);

module.exports = router;
