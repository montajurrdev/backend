

const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
// express.static() serve static file. inside pathname where find all static file.

app.set('view engine', 'ejs')



app.get('/', function(req, res){
    res.render('index')
})

app.get('/profile/:username', function(req,res){
    
    // res.send('hello')
    res.send(`welcome, ${req.params.username}`);
    
})

app.get('/profile/:username/:age', function(req,res){
    
    // res.send('hello')
    // res.send(req.params);  // it's an object

    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
    
})

app.listen(3000, function(){
    console.log(`server is running on http://localhost:3000`);
    
})