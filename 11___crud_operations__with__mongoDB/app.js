const express = require('express')
const app = express()

const userModel = require('./usermodel')


app.get('/', (req,res)=>{
    res.send('Hello')
})

app.get('/create', async (req, res)=>{
    const user = await userModel.create({
        name: "Mon",
        email: "montajur@gmail.com",
        username: "montajurrdev"
    })

    // mongoDB related, mongoose e lekha sob code async

    // console.log("Hello");

    res.send(user)
    
})

app.get("/update", async (req, res) => {

    // userModel.findOneUpdate(findone, update, {new: true})

    const updatedUser = await userModel.findOneAndUpdate({username: "montajurrdev"}, {name: "Monir Khan"}, {new: true})

    res.send(updatedUser);
});


app.get("/read", async (req, res) => {

let users = await userModel.find()
res.send(users)

});

app.get("/readSingle", async (req, res) => {

// let users = await userModel.find({name: "Montajur" });
// find give us related all data in array


let users = await userModel.findOne({name: "Montajur" });
// findOne give us a object to pick the first matching data.



res.send(users)

});


app.get("/delete", async (req, res) => {

let user = await userModel.findOneAndDelete({name: "Montajur"})
// delete first one

res.send(user)
});


app.listen(3000)

