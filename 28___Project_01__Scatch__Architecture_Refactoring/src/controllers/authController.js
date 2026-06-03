const authService = require("../services/authService");

module.exports.registerUser = async function (req, res, next) {
  try {
    const {token} = await authService.registerUser(req.body);
    

    res.cookie("token", token);
    res.redirect("/shop");
  } catch (err) {
    next(err);
  }
};

module.exports.loginUser = async function (req, res, next) {
  let {token} = await authService.loginUser(req.body);

  res.cookie("token", token);
  res.redirect("/shop");
};


module.exports.logout = function (req, res, next) {
  res.cookie("token", "");
  res.redirect("/");
};
