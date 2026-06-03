const { createOwner, adminDashboard } = require("../services/ownerService");

module.exports.createOwner = async function (req, res, next) {
  let data = await createOwner(req.body);

  res.status(201).send(data);
};

module.exports.adminDashboard = async function (req, res, next) {
  let data = await adminDashboard();
  
  let success = req.flash("success");
  res.render("admin", { data, success });
};

module.exports.productCreatePage = function (req, res) {
  res.render("createProducts");
};
