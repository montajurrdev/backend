const fs = require('fs')

// writeFile, copyfile, appendfile, rename,

// fs.writeFile("hey.txt","I am Montajur.", function(err){
//     if(err) console.log(err);
//     else console.log('DONE');
// })


// fs.appendFile("hey.txt"," How are you?", function(err){
//     if(err) console.log(err);
//     else console.log('DONE');
// })


// fs.rename('hey.txt', 'hello.txt', function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })


// fs.copyFile('hello.txt', './copy/copy.txt', function(err){
//     if(err) console.log(err);
//     else console.log('done');
    
    
// })

// fs.copyFile('hello.txt', './copy2/copy.txt', function(err){
//     if(err) console.log(err.message);
//     else console.log('done');
    
    
// })  // error


// fs.unlink('hello.txt', function(err){
//     if(err) console.log(err);
//     else console.log('remove');
// })


// fs.rmdir('./copy', function(err){
//     if(err) console.log(err);
//     else console.log('remove');

// }) // Error: this method only can remove empty directory


// fs.rmdir("./empty", function (err) {
//   if (err) console.log(err);
//   else console.log("remove");
// }); 


//
// with file : recursive:true
// fs.rmdir("./copy",{recursive: true} , function (err) {
//   if (err) console.log(err);
//   else console.log("remove");
// });


fs.rm("./copy",{recursive: true}, function (err) {
  if (err) console.log(err);
  else console.log("remove");
});



