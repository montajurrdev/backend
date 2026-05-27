const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;

    let user = await userModel.findOne({email: email})
    if(user) return res.status(401).send("You already have an account, please login")

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          });

          let token = generateToken(user);
          res.cookie("token", token);

          res.redirect("/shop");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};


module.exports.loginUser = async function (req, res){
    let {email, password} = req.body;

    let user = await userModel.findOne({email:email})
    if(!user) return res.status(401).send("Email or Password incorrect")

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
            let token = generateToken(user)
            res.cookie("token", token)
            res.redirect("/shop");
        }
        else{
            return res.status(401).send("Email or Password incorrect");
        }
    })
    


}

module.exports.logout = function (req, res){
  res.cookie("token", "");
  res.redirect("/");
}


// how to work redirect:
// res create a http res and sends it to browser.
// browser get res with new location.
// browser automatically create a http req to new location
// "/"  => root url a req patay
// "/profile"  => root/profile a req patay
// these are absolute path. means redirect from root

// relative path: "profile" or "dashboard"  relative from current url
// external url "https://www.google.com"