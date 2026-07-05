const express = require("express");
const router = express.Router(); // it handles routing
const upload = require("../config/multer");
const isLoggedIn = require("../middlewares/isLoggedIn")

const productController = require("../controllers/productController");
const authorize = require("../middlewares/authorize");
const ROLES = require("../constants/roles")

router.post("/create", isLoggedIn, authorize(ROLES.ADMIN), upload.single("image"), productController.createProduct);



module.exports = router;
