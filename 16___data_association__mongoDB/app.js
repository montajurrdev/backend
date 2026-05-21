const express = require('express')
const app = express()

const path = require('path')

// model 
const userModel = require("./models/user")
const postModel = require("./models/post")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.send('Hello')
})


// demo user create
app.get('/create', async (req, res)=>{

    let user = await userModel.create({
      username: "montajur",
      email: "montajur@gmail.com",
      age: 23,
    });

    res.send(user)
})


// demo post create
app.get('/post/create', async (req, res)=>{
  let post = await postModel.create({
    post: "Hello vailog sober ki obostha",
    user: "6a0f17ca832262a0296557d4", // manually set userId
  });

  let user = await userModel.findOne({ _id: "6a0f17ca832262a0296557d4" });
  user.posts.push(post._id);
  user.save(); // need to save manually since it's findOne, not findOneAndUpdate

  res.send({post,user});
})

app.listen(3000)