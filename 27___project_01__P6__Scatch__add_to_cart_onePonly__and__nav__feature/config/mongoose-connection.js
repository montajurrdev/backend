const mongoose = require('mongoose');
const dbgr = require('debug')("development:mongoose")
const config = require('config')

mongoose
  .connect(`${process.env.MONGODB_URI || config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    // console.log("connected");
    dbgr("connected");
  })
  .catch(function (err) {
    // console.log(err);
    dbgr(err);
  });

module.exports = mongoose.connection;


// error handling:
// without .then and .catch server can be crashed.
// because node.js server and db server will be running on separate system.
// db server can be stop/off. if db server is being off, node server can't be connect with db
// if we connect it directly without validation/ error handled. 
// our node.js server will be crashed.

// instead, we can use try,catch



// development.json file is static file.
// it can't automatically read .env file
// "MONGODB_URI": "process.env.MONGODB_URI"  , if we set this type, config doesn't find MONGODB_URI from .env automatically
 
// that's why we must need to use .env file for db url
// and use it at mongoose connection directly through process.env

//