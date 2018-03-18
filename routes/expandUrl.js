let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let URL = require("../models/url-model");

router.get("/:id", (req, res) => {
  let id = req.params.id;
  URL.find({ hash: id }, (err, result) => {
    if (result.length === 0) {
      res.json(`There is no long URL registered for hash ${id}.`);
    } else {
      res.json(`Your long url is: ${result}`);
    }
  });
});

module.exports = router;
