const express = require("express");
const router = express.Router(); // it handles routing
const { registerUser, loginUser } = require("../controllers/authController");


router.get("/", function (req, res) {
  res.send("hey it's working");
});

router.post("/register", registerUser);

router.post("/login", loginUser)

module.exports = router;


// this is without checkpoint. we need to validate data first.
// then we should create user

// custom middleware or joi pkg => check data

// jwt token => utils

// jwt te sei data store korte hobe, je data user login er por amdr lagbe. 
// browser jwt patanor por user ke, eta check korar jonno ja lagbe, tai jwt te store korbo
