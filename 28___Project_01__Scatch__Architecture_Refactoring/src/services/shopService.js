const userModel = require("../models/user-model");
const productModel = require("../models/product-model");


module.exports.getCart = async (email) => {
  let user = await userModel.findOne({ email }).populate("cart");
  let bill = 0;
  if (user.cart[0]) {
    bill = user.cart[0].price + 20 - user.cart[0].discount;
  }

  return { user, bill };
};

module.exports.getShop = async () => {
  let products = await productModel.find()
  
  return { products };
};

module.exports.addToCart = async (email,id) => {

    let user = await userModel.findOne({ email});

    if (user.cart.length > 0) {
      user.cart.splice(0, user.cart.length);
    }

    // or instead statement, we can write just
    // user.cart = []

    user.cart.push(id);
    await user.save();

};


  module.exports.getMyAccount = async (email) => {
     let user = await userModel.findOne({ email});

    return { user};
  };