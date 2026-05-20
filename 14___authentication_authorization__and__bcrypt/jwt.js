// jwt ki? and jwt te data kivabe store kora hoy and ber kora hoy

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", function (req, res) {
  // token create with data and a secretkey (encoded)
  let token = jwt.sign({ email: "montajurrdev@gmail.com" }, "secretkey");
  // console.log(token);
  res.cookie("token", token);
  res.send("done");
});

app.get("/read", function (req, res) {
  // console.log(req.cookies);
  console.log(req.cookies.token);
  res.send("reading done");
});

// verify jwt token at next req. and decode data
app.get("/verify", function (req, res) {
  // console.log(req.cookies.token);
  let data = jwt.verify(req.cookies.token, "secretkey");
  console.log(data);

  // after verify, server will give res using user data
});

app.listen(3000);

// jsonwebtoken:
// Header, payload, signature

// Header => algorithm: je system a jwt banano hoyece
// payload => original data / user data
// signature => jwt unique signature. it will make using header and payload

// frontend send log in data => server check using db=> res + string(jwt)

// jsonwebtoken: user data => encoded => string(jwt)

// at next every req: browser sent => jwt => server => decoded (original data) => check => res
