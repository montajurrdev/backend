const productService = require("../services/productService");

module.exports.createProduct = async function (req, res, next) {
  try {
    await productService.createProduct(req.body, req.file);

    req.flash("success", "Products created successfully.");
    res.redirect("/owners/admin");
  } catch (err) {
    res.send(err.message);
  }
};
