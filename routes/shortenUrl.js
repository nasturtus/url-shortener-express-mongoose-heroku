let express = require("express");
let router = express.Router();
let encode = require("../encode");
const mongoose = require("mongoose");
let URL = require("../models/url-model");

router.post("/", (req, res) => {
  let hash;
  let url = req.body.url;

  URL.find({ url: url }, function(err, result) {
    if (result.length === 0) {
      URL.count({}, function(err, count) {
        hash = encode(count);
        let newUrl = new URL({ url: url, hash: hash });
        newUrl.save(function(err) {
          if (err) return next(err);
        });
        res.json(
          `${newUrl.url} with hash ${
            newUrl.hash
          } saved successfully to the database`
        );
      });
    } else {
      res.json(`url already exists in the database hashed as ${result}`);
    }
  });
});

module.exports = router;
