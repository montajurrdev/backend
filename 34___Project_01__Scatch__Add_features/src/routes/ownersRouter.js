const express = require("express");
const router = express.Router(); // it handles routing

const ownerController = require("../controllers/ownerController");
const authorize = require("../middlewares/authorize");
const isLoggedIn = require("../middlewares/isLoggedIn");
const ROLES = require("../constants/roles")

console.log(ROLES.ADMIN);


// this routes will run till env variable is development
if (process.env.NODE_ENV === "development") {
  router.post("/create", ownerController.createOwner);
}




router.get(
  "/admin",
  isLoggedIn,
  authorize(ROLES.ADMIN),
  ownerController.adminDashboard,
);
 

router.get(
  "/admin/create",
  isLoggedIn,
  authorize(ROLES.ADMIN),
  ownerController.productCreatePage,
);



module.exports = router;
