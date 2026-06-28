const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product"
  }],
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});


module.exports = mongoose.model("user", userSchema)



// change email field to increase protection => db will validate data
// unique: true => this is for:
// Never trust only one layer 

// add role field
// default: "user" => when someone register => role: "user"

// enum => this prevents invalid roles => like "superman", "hacker", "king" => just allowed "user", "admin" 
// => MongoDB will reject invalid roles 