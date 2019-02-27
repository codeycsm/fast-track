// API Routes
let express = require("express");
let router = express.Router();
let db = require("../models");

router.post("/new-user", function(req, res) {
  console.log(`posted new user: ${req.body.username}`);
  // new username
  let newUser = req.body.username;
  // username is taken variable
  let isTaken = false;
  // Checks database if username exists by counting how  many username column values are the same
  db.User.count({
    where: { username: newUser }
  }).then(function(count) {
    // If the count is 0 the new user will be created.
    if (count === 0) {
      // Creates a new user with users input
      db.User.create({
        username: newUser
      }).then(function(newUser) {
        // new users id and username
        let user = {
          name: newUser.dataValues.username,
          id: newUser.dataValues.id
        };
        // Redirects the user to the index page
        res.send(user);
      });
    } else {
      // If the username exists in the database return true.
      isTaken = true;
      res.send(isTaken);
    }
  });
});

module.exports = router;
