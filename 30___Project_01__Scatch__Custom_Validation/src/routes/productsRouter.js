const express = require("express");
const router = express.Router(); // it handles routing
const upload = require("../config/multer-config");

const productController = require("../controllers/productController");

router.post("/create", upload.single("image"), productController.createProduct);



module.exports = router;
