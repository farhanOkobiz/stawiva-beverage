const GetQuote = require("../models/getquoteModel");
const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("./handleFactory");

exports.createGetQuoteController = createOne(GetQuote);

exports.getAllGetQuoteController = getAll(GetQuote);

exports.getGetQuoteController = getOne(GetQuote);

exports.updateGetQuoteController = updateOne(GetQuote);

exports.deleteGetQuoteController = deleteOne(GetQuote);
