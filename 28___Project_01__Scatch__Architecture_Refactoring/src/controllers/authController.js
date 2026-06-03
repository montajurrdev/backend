const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

const { registerUser, loginUser } = require("../services/authService");

module.exports.registerUser = async function (req, res, next) {
  try {
    const data = await registerUser(req.body);
    

    res.cookie("token", data.token);
    res.redirect("/shop");
  } catch (err) {
    next(err);
  }
};

module.exports.loginUser = async function (req, res, next) {
  let data = await loginUser(req.body);

  res.cookie("token", data.token);
  res.redirect("/shop");
};


module.exports.logout = function (req, res, next) {
  res.cookie("token", "");
  res.redirect("/");
};
