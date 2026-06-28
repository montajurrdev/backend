const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const AppError = require("../errors/AppError");

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "you need to login first");
    return res.redirect("/");
  }

  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    let user = await userModel.findById(decoded.id).select("-password"); // user data te password nibo na

    if (!user) {
      throw new AppError("User no longer exists", 401);
    }

    req.user = user;

    next();
  } catch (err) {
    req.flash("error", "something went wrong");
    return res.redirect("/");
  }
};

// there are some issue:
// try/catch => we have asyncHandler + globalErrorHandler
// flash + redirect => for ssr applications it is acceptable. => for APIs would used. but need to polished

// since it is ejs project => that's why we will keep flash + redirect => and need  try/catch

// admin delete User after token issued => user sends old JWT =>so user null, req.user = null

// USing Email => email can change. but id never changes => findById is faster
