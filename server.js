// ==========================================
// COPIED FROM ANOTHER PROJECT NEEDS TWERK
// ==========================================

// ==========================================
// DEPENDENCIES
// ==========================================
var express = require("express");
// var methodOverride = require("method-override");
// var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
let sequelize = require("sequelize");
let db = require("./models");
// ==========================================

// ==========================================
// SERVER SETUP
// ==========================================
var app = express();
var port = process.env.PORT || 3000;
// ==========================================
// JSON parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ==========================================
// HANDLEBARS SETUP
// ==========================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// ==========================================

// ==========================================
// ROUTES SETUP
// ==========================================
app.use(express.static(__dirname + "/public"));

// app.use(methodOverride("_method"));

// require("./controllers/")(app);
// ==========================================
// Database sync & port listening.
// ==========================================
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log(`Server listening on: http://localhost:${port}`);
  });
});
