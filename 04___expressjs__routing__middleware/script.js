const express = require('express')

const app = express();

// middleware: dui vabe use kora jay


// global middleware: sob request a cholbe
app.use(function(req, res, next){
    console.log('middleware cholce');
    next()
})

app.use(function(req, res, next){
    console.log('middleware cholce aro akbar');
    next()
})


// route specific middleware:
// app.get(route, middleware, requestHandler);

const myMiddleware = (req, res, next)=>{
    console.log("Specific route hit!");
    next()
    
}



// routes create korte pari

// app.get(Route, requestHandler)   // requestHandler o ak middleware

app.get("/", function(req,res){
    res.send("champion")

})

app.get("/profile", function (req, res) {
    res.send("champion er coach a")
});


app.get("/about", myMiddleware, (req, res)=>{
    res.send('My name is Montajur')
})


// Error handling
app.get("/forError", function (req, res, next) {
 return next(new Error('somethng went wrong'))  
 
 // Error() makes an error object {message:"", stack:""}
 // it become next(error). it skips all normal middleware and go to error handler middleware.
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send('Something broke!')
    
})

app.listen(3000)





