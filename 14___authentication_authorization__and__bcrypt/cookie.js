// cookie kivabe set korte hoy and read korte hoy


const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", function (req, res) {
  // set cookie at any routes
  res.cookie("name", "montajurrahman");
  res.send("Hello");
});

app.get("/read", function (req, res) {
  // there is we don't send cookie. but cookie will be sent at every routes.

  // after that, frontend will send cookie at every req
  console.log(req.cookies);
  // undefined — need to parse this cookies(cookie-parser)

  res.send("read page");
});

app.listen(3000);
