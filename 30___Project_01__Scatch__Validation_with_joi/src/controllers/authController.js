const authService = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");
const { validateUser } = require("../validators/authValidator");
const AppError = require("../errors/AppError");
const userSchema = require("../validators/user-schema")

module.exports.registerUser = asyncHandler(async function (req, res) {
  const errors = validateUser(req.body, userSchema);
  // console.log(errors);
  
  if (errors.length > 0) {
    throw new AppError(errors.join(","), 404);
  }

  const { token } = await authService.registerUser(req.body);

  res.cookie("token", token);
  res.redirect("/shop");
});
// no try, no catch, no next(err)

module.exports.loginUser = asyncHandler(async function (req, res) {
  let { token } = await authService.loginUser(req.body);

  res.cookie("token", token);
  res.redirect("/shop");
});

module.exports.logout = asyncHandler(function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});
