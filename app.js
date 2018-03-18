if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

let index = require("./routes/index");
let shortenUrl = require("./routes/shortenUrl");
let expandUrl = require("./routes/expandUrl");
let allUrls = require('./routes/allUrls')

// routes
app.use("/", index);
app.use('/all', allUrls)
app.use("/shortenurl", shortenUrl);
app.use("/expandurl", expandUrl);

// connect to database
const dbUrl = process.env.MONGODB_URI;
mongoose.connect(dbUrl)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to mongodb...")
});

// server start
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
