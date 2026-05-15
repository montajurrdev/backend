const express = require("express");
const app = express();

const path = require("path");
const userModel = require("./models/users");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  // users.forEach(element => {
  //     log(element.image)
  // });
  res.render("read", { users });
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createUser = await userModel.create({
    name,
    email,
    image,
  });

  // res.send(createUser)
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
    let user = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect('/read')

});

app.listen(5000);


// important something
// we used get method for delete. because, <a> tags only send GET requests. clicking link means: request a page/resource

// HTML elements support limited http method.

// HTML <form></form> supports POST only.
// <a> tag supports get only. Not Delete method. so when we use delete method, it show error

// this is one way. Not RESTfull/professional


//  RESTfull/professional way: 
    // uses middleware to convert method (Method Override) - traditional SSR Way
    // Modern API/Frontend Way: 
            // javascript fetch supports all http method
            //  Frontend → react/APIs/fetch   backend → app.delete()   work perfectly

