const express = require("express");
const app = express();
const { log } = require("console");

const path = require("path");
const cookieParser = require("cookie-parser");

// model
const userModel = require("./models/user.js");

// bcrypt
const bcrypt = require("bcrypt");

// jwt
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    // log(salt)
    bcrypt.hash(password, salt, async (err, hash) => {
      // log(hash)

      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email }, "secretkey");
      res.cookie("token", token);

      res.send(createdUser);
    });
  });

  // let createdUser = await userModel.create({
  //     username,
  //     email,
  //     password,
  //     age
  // })

  // // log(createdUser)
  // res.send(createdUser)
});


app.get('/logout', (req, res)=>{
    res.cookie("token", "")
    res.redirect('/')
})

app.get('/login',(req, res)=>{
    res.render("login")
})

app.post('/login', async (req, res)=>{
    let user = await userModel.findOne({email: req.body.email})
    // log(user)  email metch korle user data dibe, na korle null dibe

    if(!user) return res.send('something is wrong')

    bcrypt.compare(req.body.password, user.password, (err, result)=>{
    //   log(result); // result true or false
    // if(result) return res.send("Yes, you can login");

    // with jwt 
    if(result){
              let token = jwt.sign({ email: user.email }, "secretkey");
              res.cookie("token", token);

              res.send("Yes, you can login");
    }

    else res.send("something is wrong");
    })  

})


app.listen(3000);

// async keyword await er parent function a dite hoy
