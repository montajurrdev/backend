const authService = require("../services/authService");
const asyncHandler = require("../utils/asyncHandler");

module.exports.registerUser = asyncHandler(async function (req, res) {
  const { token } = await authService.registerUser(req.body);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.redirect("/shop");
});
// no try, no catch, no next(err)

module.exports.loginUser = asyncHandler(async function (req, res) {
  let { token } = await authService.loginUser(req.body);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.redirect("/shop");
});

module.exports.logout = asyncHandler(function (req, res) {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  })

  req.flash("success", "Logged out successfully");
  res.redirect("/");
});



// logout:  now, res.cookie("token", ""); or we can use => res.clearCookie("token");

// how does logout work:
// we can't destroy the jwt itself => because jwt is stateless 
// once issued => jwt exists until it expires

// we simply remove the cookie from browser
// browser => no token cookie => User is effectively logged out


// good practice => to use same cookie options that were used when creating the cookie

// res.clearCookie("token", {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "strict",
// });


// this is enough for current ejs project => jwt + cookie + ejs

