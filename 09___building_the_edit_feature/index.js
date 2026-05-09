const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    fs.readdir(`./files`, function(err,files){
        // readdir give us a array
        // console.log(files);
        
        res.render("index", {files: files})
    } )
})

app.post("/create", function (req, res) {
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
    res.redirect('/')
    
})   // split give us a array


});


// for read more page
app.get("/file/:filename", function (req, res) {

    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){

        res.render('show',{filename: req.params.filename, filedata: filedata})
        
    })
});


// for edit
app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", function (req, res) {
  console.log(req.body);

  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      // console.log(err);
      res.redirect("/");
    },
  );
});

app.listen(3000, function(){
    console.log(`server is running on http://localhost:3000`);
    
})