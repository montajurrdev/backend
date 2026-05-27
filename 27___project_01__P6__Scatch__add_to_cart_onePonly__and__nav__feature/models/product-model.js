const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
image : Buffer,
name : String,
price : Number,
discount : {
    type: Number,
    default: 0
},
bgcolor: String,
panelcolor : String,
textcolor : String,

});


module.exports = mongoose.model("product", productSchema);



// Buffer:
// raw binary data (bytes) → machine-readable data
// when we use multer.memoryStorage()
// multer does not save file to disk. Instead: keeps file in RAM as Buffer
// then, we get req.file.buffer  directly from RAM

// after that, we can store directly in database 
// without read/write in disk => no delay => fast access
