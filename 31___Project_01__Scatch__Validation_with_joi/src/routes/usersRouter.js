const express = require("express");
const router = express.Router(); // it handles routing
const authController = require("../controllers/authController");
const validate = require("../middlewares/validate");
const { registerSchema } = require("../validators/authValidator");

router.post("/register", validate(registerSchema), authController.registerUser);

router.post("/login", authController.loginUser);

router.get("/logout", authController.logout);

module.exports = router;


