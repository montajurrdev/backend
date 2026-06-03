const express = require("express");
const router = express.Router(); // it handles routing
const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController");



router.post("/register", registerUser);

router.post("/login", loginUser)

router.get("/logout", logout)

module.exports = router;

