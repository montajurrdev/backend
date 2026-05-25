const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const path = require('path');

// router
const index = require("./routes/index")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/usersRouter")
const productsRouter = require("./routes/productsRouter")

require('dotenv').config()  // .env te joto keys thake sobgulo ke process.env.keys er maddhome access korte parbo.

// db connection
const db = require("./config/mongoose-connection")



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")

// flash setup
const flash = require("connect-flash");
const expressSession = require("express-session");

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET

}))

app.use(flash())

// routes: 
app.use("/", index)
app.use("/owners", ownersRouter)  // means: owners related sob req ownersRouter a patay dao
app.use("/users", usersRouter)
app.use("/products", productsRouter)

app.listen(3000)