// ==========================================
// DEPENDENCIES
// ==========================================
var express = require("express");
var exphbs = require("express-handlebars");
let db = require("./models");
let htmlRoutes = require("./routes/htmlRoutes");
let apiRoutes = require("./routes/apiRoutes");
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

app.use(htmlRoutes);
app.use(apiRoutes);
app.use(express.static(__dirname + "/public"));
// ==========================================
// Database sync & port listening.
// ==========================================
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log(`Server listening on: http://localhost:${port}/`);
  });
});
