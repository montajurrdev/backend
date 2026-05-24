const express = require("express");
const app = express();
const path = require('path')

// diskStorage
const upload = require('./config/multerconfig')


const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// models
const userModel = require("./models/user");
const postModel = require("./models/post");

// view engine for ssr
app.set("view engine", "ejs");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

// profile pic upload
app.get("/profile/upload", (req, res) => {
  res.render("profileupload");
});

app.post("/upload", isLoggedIn, upload.single('image'), async (req, res) => {
  let user = await userModel.findOne({email: req.user.email})
 user.profilepic = req.file.filename
 await user.save();
 res.redirect("/profile")
});


app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  // console.log(req.user);
  let user = await userModel.findOne({email : req.user.email})

   await user.populate("posts")  // it's a mongoose method for data association between collection
  // it means: find the user, then replace the posts ids with full post data
  // mongoose automatically fetch data from user.posts ids

  
    res.render("profile", {user}); 
});

// like
app.get("/like/:id", isLoggedIn, async (req, res) => {
  // console.log(req.user);
  let post = await postModel.findOne({ _id: req.params.id }).populate('user')


  // console.log(post.likes.indexOf(req.user.userId));   // index of array 
  
  if(post.likes.indexOf(req.user.userId) === -1 ){
    post.likes.push(req.user.userId);
  }
  else{
    post.likes.splice(post.likes.indexOf(req.user.userId));  // remove this index of array
  }

  
  await post.save()

  res.redirect("/profile")
});

// edit post
app.get("/edit/:id", isLoggedIn, async (req, res) => {
  // console.log(req.user);
  let post = await postModel.findOne({ _id: req.params.id }).populate("user")

  res.render("edit", {post})
});


app.post("/update/:id", isLoggedIn, async (req, res) => {
  // console.log(req.user);
  let post = await postModel.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content})

  res.redirect("/profile")
});



// post
app.post("/post", isLoggedIn, async (req, res) => {
  // console.log(req.user);
  let user = await userModel.findOne({email : req.user.email})
  let { content} = req.body;

  let post = await postModel.create({
    user: user._id,
    content
    
  })

  user.posts.push(post._id)
   await user.save()
  
    res.redirect('/profile')
});

// we will learn validation here
// before create user, check korte hobe, sei user already registered kina

app.post("/register", async (req, res) => {
  // destructure body first for simplicity
  let { name, username, age, email, password } = req.body;

  let user = await userModel.findOne({ email }); // {email: email} => since both same => {email}
  if (user) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        username,
        age,
        email,
        password: hash,
      });

      let token = jwt.sign({ email: email, userId: user._id }, "secretkey");
      res.cookie("token", token);

      res.send("Registered");
    });
  });
});

// login
app.post("/login", async (req, res) => {
  // destructure body first for simplicity
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userId: user._id }, "secretkey");
      res.cookie("token", token);
      res.status(200).redirect('/profile')
    } else res.redirect("/login");
  });
});

// logout
// just removing token . it will log out
app.get("/logout", (req, res) => {
  res.cookie("token", ""); // send blank token that name is token
  res.redirect("/login");
});

// middleware for protected route: eti sobar sese bose
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "" || !req.cookies.token) res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "secretkey"); // secret key er maddhome verify korbe. if true: give us payload

    req.user = data; // data will be gone through req.user where we use this middleware

    // why we need to pass this data? because
    // Ans: May be needed to access userdata at that routes
    next();
  }

}

// like: token na  thakle profile er access dibo na

app.listen(3000);