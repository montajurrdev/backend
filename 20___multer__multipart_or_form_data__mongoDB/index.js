const express = require("express");
const app = express();

// multer
const multer = require("multer");
const crypto = require("crypto"); //for unique name
const path = require("path");

// view engine for ssr
app.set("view engine", "ejs");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // need a unique filename. because many user can be upload same name file

    crypto.randomBytes(12, function (err, bytes) {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
    // cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// files handling with multer
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("upload done");
});

app.listen(3000);
