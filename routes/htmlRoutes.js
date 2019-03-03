// HTML Routes
let express = require("express");

var router = express.Router();
let db = require("../models");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/timer", function(req, res) {
  res.render("timer");
});

router.get("/fast-data", function(req, res) {
  res.render("fastData");
});

module.exports = router;
