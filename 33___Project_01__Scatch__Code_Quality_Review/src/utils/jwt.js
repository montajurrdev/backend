const jwt = require("jsonwebtoken");
const env = require("../config/env")

module.exports.generateAccessToken = (user) => {
  return jwt.sign({ email: user.email, id: user._id }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn,
  });
};

