let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let URL = require("../models/url-model");

router.get("/", (req, res) => {
  URL.remove(function(err) {
    if (err) return handleError(err);
  });
  console.log("All books deleted from database...let's start afresh");

  res.sendFile("index.html", { root: __dirname });
});

module.exports = router;
