const express = require("express");
const router = express.Router(); // it handles routing

const ownerController = require("../controllers/ownerController");


// this routes will run till env variable is development
if (process.env.NODE_ENV === "development") {
  router.post("/create", ownerController.createOwner);
}




router.get("/admin", ownerController.adminDashboard);
 

router.get("/admin/create", ownerController.productCreatePage);



module.exports = router;
