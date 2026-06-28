const express = require("express");
const router = express.Router(); // it handles routing

const ownerController = require("../controllers/ownerController");
const authorize = require("../middlewares/authorize");
const isLoggedIn = require("../middlewares/isLoggedIn");


// this routes will run till env variable is development
if (process.env.NODE_ENV === "development") {
  router.post("/create", ownerController.createOwner);
}




router.get("/admin",isLoggedIn, authorize("admin", "owner"), ownerController.adminDashboard);
 

router.get("/admin/create",isLoggedIn, authorize("admin", "owner"), ownerController.productCreatePage);



module.exports = router;
