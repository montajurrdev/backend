const express = require("express");
const router = express.Router(); // it handles routing
const authController = require("../controllers/authController");
const validateMiddleware = require("../middlewares/validateRequest")
const { validateRegister } = require("../validators/authValidator");
const registerSchema = require("../validators/user-schema")

router.post(
  "/register",
  validateMiddleware(validateRegister(registerSchema)),
  authController.registerUser,
);

// 

router.post("/login", authController.loginUser)

router.get("/logout", authController.logout)

module.exports = router;



// router.post(
//   "/register",
//   validateMiddleware((data) => {
//     console.log(data);

//     return validateRegister(data, registerSchema);

//     // return for access error to outer function/scope
//     // without return Error will not gone to validateMiddleware/ globalErrorHandler
//   }),
//   authController.registerUser,
// );