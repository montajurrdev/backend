const multer = require('multer');

const storage = multer.memoryStorage();  // means: RAM
const upload = multer({storage: storage})


module.exports = upload;