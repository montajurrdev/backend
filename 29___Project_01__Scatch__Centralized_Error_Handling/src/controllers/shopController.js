const shopService = require("../services/shopService");
const asyncHandler = require("../utils/asyncHandler");

module.exports.getCart = asyncHandler(async (req, res) => {

    const {user, bill} = await shopService.getCart(req.user.email);

    res.render("cart", { user, bill });

})


module.exports.getShop = async (req, res, next) => {
  const {products} = await shopService.getShop();

  let success = req.flash("success");

  res.render("shop", { products, success });
};

module.exports.addToCart = async (req, res, next) => {

  await shopService.addToCart(req.user.email, req.params.productid);

  req.flash("success", "Added to cart");
  res.redirect("/shop");
};

module.exports.getMyAccount = async (req, res,next) => {
 
  const {user} = await shopService.getMyAccount(req.user.email);

  res.render("myAccount", { user });
}



// next function is global middleware
