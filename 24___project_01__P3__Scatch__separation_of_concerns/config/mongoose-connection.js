const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("connected");
    
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;



// error handling:
// without .then and .catch server can be crashed.
// because node.js server and db server will be running on separate system.
// db server can be stop/off. if db server is being off, node server can't be connect with db
// if we connect it directly without validation/ error handled. 
// our node.js server will be crashed.
