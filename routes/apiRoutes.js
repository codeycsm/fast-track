// API Routes
let express = require("express");
let router = express.Router();
let db = require("../models");

// Sign in route
router.post("/sign-in", function(req, res) {
  let username = req.body.username;
  let isFound = false;
  db.User.count({
    where: { username: username }
  }).then(function(data) {
    if (data === 0) {
      res.send(isFound);
    } else {
      db.User.findAll({
        where: { username: username }
      }).then(function(result) {
        let user = result[0];
        res.send(user);
      });
    }
  });
});

// Sign up route
router.post("/sign-up", function(req, res) {
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
          username: newUser.dataValues.username,
          id: newUser.dataValues.id
        };
        res.send(user);
      });
    } else {
      // If the username exists in the database return true.
      isTaken = true;
      res.send(isTaken);
    }
  });
});

router.post("/current-fast", function(req, res) {
  db.User.update(
    {
      startTime: req.body.startTime,
      endTime: req.body.endTime
    },
    {
      where: {
        id: req.body.id
     }
    }
  ).then(function(user) {
    res.json(user);
 });
});

router.post("/past-data", function(req, res) {
  let user = req.body.user;
  db.PastFast.findAll({
    where: {
      UserId: user.id
    }
  }).then(function(data) {
    res.send(data);
  });
});

module.exports = router;
