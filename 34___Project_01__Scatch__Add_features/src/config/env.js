require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_KEY,
  nodeEnv: process.env.NODE_ENV,
  mongoDB_URI: process.env.MONGODB_URI,
  sessionSecret: process.env.EXPRESS_SESSION_SECRET,
  cookieMaxAge: 7 * 24 * 60 * 60 * 1000,
  jwtExpiresIn: "7d",
};
