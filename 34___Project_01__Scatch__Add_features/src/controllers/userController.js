const userService = require("../services/userService");
const asyncHandler = require("../utils/asyncHandler");

module.exports.getMyAccount = asyncHandler(async (req, res) => {
  const { user } = await userService.getMyAccount(req.user._id);

  res.render("profile", { user });
});

module.exports.updateProfile = asyncHandler(async (req, res) => {
  
  await userService.updateProfile(req.user._id, req.body, req.file);

  res.redirect("/users/profile")
});
