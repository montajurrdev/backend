const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const AppError = require("../errors/AppError")


module.exports.registerUser = async (data) => {
  let { fullname, email, password } = data;

  let user = await userModel.findOne({ email });
  if (user) {
    throw new AppError("You already have an account", 409);
    }

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return reject(err);

        let user = await userModel.create({
          fullname,
          email,
          password: hash,
        });

        let token = generateToken(user);

        resolve({ token });
      });
    });
  });
};

module.exports.loginUser = async (data) => {
  let { email, password } = data;

  let user = await userModel.findOne({ email });
  if (!user) throw new AppError("Email or Password incorrect", 404);

  const result = await bcrypt.compare(password, user.password);

  if (!result) throw new AppError("Email or Password incorrect", 400);

  let token = generateToken(user);

  return { token };
};

// async callback problem
// loginUser and registerUser
// return {token} inside callback function under => bcrypt.compare()
// callback function return, but loginUser/registerUser function is not returned anything
// loginUser function finished before callback function => async style

// fix: return inside loginUser function or  // wrapped promises outside bcrypt.compare() and return
