const shopService = require("../services/shopService");
const asyncHandler = require("../utils/asyncHandler");

module.exports.getCart = asyncHandler(async (req, res) => {

    const {user, bill} = await shopService.getCart(req.user.email);

    res.render("cart", { user, bill });

})


module.exports.getShop = async (req, res, next) => {

  const search = req.query.search?.trim();
  const page = Number(req.query.page) || 1

  
  const data = await shopService.getShop(search, page);

  let success = req.flash("success");

  res.render("shop", { data, success });
};

module.exports.addToCart = async (req, res, next) => {

  await shopService.addToCart(req.user.email, req.params.productid);

  req.flash("success", "Added to cart");
  res.redirect("/shop");
};





// next function is global middleware
