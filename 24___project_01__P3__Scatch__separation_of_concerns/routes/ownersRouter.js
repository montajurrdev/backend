const express = require('express');
const router = express.Router()  // it handles routing

router.get("/", function(req, res){
    res.send("hey it's working")
})

module.exports = router;