const ownerService = require("../services/ownerService");

module.exports.createOwner = async function (req, res, next) {
try{
    let data = await ownerService.createOwner(req.body);

  res.status(201).send(data);
} catch(err){
      res.status(err.statusCode).json({
        message: err.message,
        status: err.status,
      });
}
};

module.exports.adminDashboard = async function (req, res, next) {
  let {products} = await ownerService.adminDashboard();
  
  let success = req.flash("success");
  res.render("admin", { products, success });
};

module.exports.productCreatePage = function (req, res,next) {
  res.render("createProducts");
};
