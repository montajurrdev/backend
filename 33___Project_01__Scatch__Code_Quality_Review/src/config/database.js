const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
mongoose
  .connect(`${process.env.MONGODB_URI}/scatch`)
  .then(function () {
    dbgr("connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;

// config pkg: by default it search config folder at project root
// const config = require('config')
// config.get("MONGODB_URI");
// if we want to use config pkg for configuration, we need to move config folder at root
// that's why i just used modern convention
// => .env + dotenv pkg => it gives => process.ENV.something => we can access everywhere
