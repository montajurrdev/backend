const express = require("express");
const router = express.Router(); // it handles routing
const upload = require("../config/multer-config");

const { createProduct } = require("../controllers/productController")

router.post("/create", upload.single("image"), createProduct);



module.exports = router;
