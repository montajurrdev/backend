const express = require('express')

const app = express()


// make json data readable
app.use(express.json())

// make form data readable
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send("Hello")
})

app.get('/profile', (req,res)=>{
    res.send({message: "profile coming"})
})



app.listen(5000)