const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

const rootController = require("../controllers/rootController");
const shopController = require("../controllers/shopController");

router.get("/", rootController.root )

router.get("/shop", isLoggedIn, shopController.getShop);

router.get("/cart", isLoggedIn, shopController.getCart);

router.get("/myaccount", isLoggedIn, shopController.getMyAccount);

router.get("/addtocart/:productid", isLoggedIn, shopController.addToCart);

module.exports = router;

