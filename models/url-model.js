const mongoose = require("mongoose");

//schema
const urlSchema = mongoose.Schema({
  url: String,
  hash: String
});

//model
const URL = mongoose.model('URL', urlSchema)

module.exports = URL
