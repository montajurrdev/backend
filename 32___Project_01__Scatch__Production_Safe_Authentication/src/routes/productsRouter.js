const express = require("express");
const router = express.Router(); // it handles routing
const upload = require("../config/multer-config");
const isLoggedIn = require("../middlewares/isLoggedIn")

const productController = require("../controllers/productController");
const authorize = require("../middlewares/authorize");

router.post("/create", isLoggedIn, authorize("admin", "owner"), upload.single("image"), productController.createProduct);



module.exports = router;
