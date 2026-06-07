const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const app = express();

require("./config/mongoose-connection");

// routes
const index = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
  }),
);

app.use(flash());

// view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes:
app.use("/", index);
app.use("/owners", ownersRouter); // means: owners related sob req ownersRouter a patay dao
app.use("/users", usersRouter);
app.use("/products", productsRouter);


// test
app.get("/test", (req, res) => {
    throw new Error("DB failed");

});

// express does not catch async error automatically
// so server will crash if we visit /test
// that's why we need a error handler


// 404 => route not found
app.use((req, res) => {
  res.status(404).render("404");
});

// global error handler => routes found but something wrong


module.exports = app;
