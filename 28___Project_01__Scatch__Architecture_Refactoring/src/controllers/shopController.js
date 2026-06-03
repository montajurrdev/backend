const {
  getCart,
  getShop,
  getMyAccount,
  addToCart,
} = require("../services/shopService");

module.exports.getCart = async (req, res, next) => {
  try {
    const data = await getCart(req.user.email);

    res.render("cart", { data });
  } catch (err) {
    next(err);
  }
};

module.exports.getShop = async (req, res, next) => {
  const data = await getShop();

  let success = req.flash("success");


  
  res.render("shop", { data, success });
};

module.exports.addToCart = async (req, res, next) => {

  addToCart(req.user.email, req.params.productid);

  req.flash("success", "Added to cart");
  res.redirect("/shop");
};

module.exports.getMyAccount = async (req, res,next) => {
 
  const data = await getMyAccount(req.user.email);

  res.render("myAccount", { data });
}



// next function is global middleware
