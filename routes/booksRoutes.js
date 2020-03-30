const express = require("express");
const Books = require("../models/Books");

const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    try {
      const book = await Books.create(req.body);
      res.status(200).json({
        success: true,
        data: book
      });
    } catch (err) {
      res.status(400).json({
        success: "fail",
        msg: "invalid credentials"
      });
    }
  })
  .get(async (req, res) => {
    try {
      const books = await Books.find();
      res.status(200).json({
        count: Books.length,
        success: true,
        data: books
      });
    } catch (err) {
      res.status(404).json({
        success: "fail",
        msg: "no books found"
      });
    }
  });
module.exports = router;
