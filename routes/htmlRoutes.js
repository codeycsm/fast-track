// HTML Routes
let express = require("express");

var router = express.Router();
let db = require("../models");

router.get("/", function(req, res) {
      res.render("index");
});

router.get('/timer', function(req, res) {
    res.render("timer");
});

module.exports = router;
