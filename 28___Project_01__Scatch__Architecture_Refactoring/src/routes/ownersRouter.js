const express = require("express");
const router = express.Router(); // it handles routing

const {
  createOwner,
  adminDashboard,
  productCreatePage,
} = require("../controllers/ownerController");


// this routes will run till env variable is development
if (process.env.NODE_ENV === "development") {
  router.post("/create", createOwner);
}




router.get("/admin", adminDashboard);
 

router.get("/admin/create", productCreatePage);



module.exports = router;
