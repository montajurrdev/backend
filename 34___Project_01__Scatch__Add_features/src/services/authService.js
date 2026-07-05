const userModel = require("../models/user-model");
const { generateAccessToken } = require("../utils/jwt");
const AppError = require("../errors/AppError");
const { hashPassword, comparePassword } = require("../utils/password");

async function checkExistingUser(email) {
  let user = await userModel.findOne({ email });
  if (user) throw new AppError("You already have an account", 409);
}

// async function hashPassword(password) {
//   // const salt = await bcrypt.genSalt(10)
//   // Internally, bcrypt.hash(password, 10):

//   // Generates the salt.
//   // Hashes the password.
//   // Returns a Promise.

//   // So genSalt() is unnecessary unless you specifically need the salt for another purpose.

//   return await bcrypt.hash(password, 10);
// }

async function createUser(data) {
  return await userModel.create(data);
}

module.exports.registerUser = async (data) => {
  let { email, password } = data;

  await checkExistingUser(email);

  const hash = await hashPassword(password);

  const user = await createUser({ ...data, password: hash });

  // the spread operator (...) copies every property from data

  let token = generateAccessToken(user);

  return { token };
};

module.exports.loginUser = async (data) => {
  let { email, password } = data;

  let user = await userModel.findOne({ email });
  if (!user) throw new AppError("Email or Password incorrect", 401); // unauthorized user

  const result = await comparePassword(password, user.password);

  if (!result) throw new AppError("Email or Password incorrect", 401); // authentication failed

  let token = generateAccessToken(user);

  return { token };
};

// async callback problem
// loginUser and registerUser
// return {token} inside callback function under => bcrypt.compare()
// callback function return, but loginUser/registerUser function is not returned anything
// loginUser function finished before callback function => async style

// fix: return inside loginUser function or  // wrapped promises outside bcrypt.compare() and return
