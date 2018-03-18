const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const URL = require("../models/url-model");

router.get("/", (req, res) => {
  URL.find(function(err, documents) {
    if (err) return next(err);
    res.send(documents);
  });
});

module.exports = router