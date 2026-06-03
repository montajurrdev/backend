const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

const {root} = require("../controllers/rootController")
const {
  getCart,
  getShop,
  getMyAccount,
  addToCart,
} = require("../controllers/shopController");

router.get("/", root )

router.get("/shop", isLoggedIn, getShop);

router.get("/cart", isLoggedIn, getCart);

router.get("/myaccount", isLoggedIn, getMyAccount);

router.get("/addtocart/:productid", isLoggedIn, addToCart);

module.exports = router;
