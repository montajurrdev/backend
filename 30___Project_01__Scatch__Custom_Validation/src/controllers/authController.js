const authService = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");

module.exports.registerUser = asyncHandler(async function (req, res) {
  
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
