const express = require("express");
const router = express.Router(); // it handles routing
const authController = require("../controllers/authController");
const validate = require("../middlewares/validate");
const { registerSchema, loginSchema } = require("../validators/authValidator");
const userController = require("../controllers/userController")
const isLoggedIn = require("../middlewares/isLoggedIn");
const upload = require("../config/multer");


// Auth
router.post("/register", validate(registerSchema), authController.registerUser);

router.post("/login",validate(loginSchema), authController.loginUser);

router.get("/logout", authController.logout);


// user profile
router.get("/profile", isLoggedIn, userController.getMyAccount);

router.post("/profile", isLoggedIn, upload.single("picture"), userController.updateProfile)

module.exports = router;


