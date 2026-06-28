const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const authorize = require("../middlewares/authorize")

const rootController = require("../controllers/rootController");
const shopController = require("../controllers/shopController");


router.get("/", rootController.root);

router.get("/shop", isLoggedIn, authorize("user"), shopController.getShop);

router.get("/cart", isLoggedIn, shopController.getCart);

router.get("/myaccount", isLoggedIn, shopController.getMyAccount);

router.get("/addtocart/:productid", isLoggedIn, shopController.addToCart);

module.exports = router;


//   (req, res, next) => {
//     const roles = ["user", "admin"]
//     if (!roles.includes(req.user.role)) {
//       return next(new AppError("not authorized"));

//     }
//     next()
//   },