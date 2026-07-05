const productModel = require("../models/product-model");

module.exports.createProduct = async (bodyData, file) => {
  let { name, price, discount, bgcolor, panelcolor, textcolor } = bodyData;

  await productModel.create({
    image: file.buffer,
    name,
    price,
    discount,
    bgcolor,
    panelcolor,
    textcolor,
  });
};
