const productService = require("../services/productService");
const asyncHandler = require("../utils/asyncHandler")

module.exports.createProduct = asyncHandler(async function (req, res) {

    await productService.createProduct(req.body, req.file);

    req.flash("success", "Products created successfully.");
    res.redirect("/owners/admin");

})
