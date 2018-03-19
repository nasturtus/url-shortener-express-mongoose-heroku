let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let URL = require("../models/url-model");

router.get("/", (req, res) => {
  console.log("In index.js ...")
  URL.remove((err) => {
    if (err) return handleError(err);
  });
  console.log("All books deleted from database...starting afresh");

  res.sendFile("index.html", { root: __dirname });
});

module.exports = router;
