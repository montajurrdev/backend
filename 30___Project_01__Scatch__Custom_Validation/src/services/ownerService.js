const productModel = require("../models/product-model");
const ownerModel = require("../models/owner-model");
const AppError = require("../errors/AppError");


module.exports.createOwner = async (data) => {

  let owners = await ownerModel.find();
  
  if (owners.length > 0) {
    throw new AppError("You don't have permission to create a new owner.", 403);
  }

  let { fullname, email, password } = data;

  let createdOwner = await ownerModel.create({
    fullname,
    email,
    password,
  });

  return {createdOwner}

};




module.exports.adminDashboard = async (req, res) => {
  let products = await productModel.find()

  return {products}
}; 