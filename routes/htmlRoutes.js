// HTML Routes
let express = require("express");
let router = express.Router();
let db = require("../models");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/sign-up", function(req, res) {
  res.render("signup");
});

module.exports = router;
