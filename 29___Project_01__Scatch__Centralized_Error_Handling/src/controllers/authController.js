const authService = require("../services/authService");

module.exports.registerUser = async function (req, res, next) {
  try {
    const {token} = await authService.registerUser(req.body);
    

    res.cookie("token", token);
    res.redirect("/shop");
  } catch (err) {

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message, 
    })

  }
};

module.exports.loginUser = async function (req, res) {
try{
    let {token} = await authService.loginUser(req.body);

  res.cookie("token", token);
  res.redirect("/shop");
} catch(err){

  res.status(err.statusCode).json({
    message: err.message,
    status: err.status,
  })
  
}
};


module.exports.logout = function (req, res, next) {
try{
    res.cookie("token", "");
  res.redirect("/");
} catch(err){
    res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
    });
  
}
};


// enumerable issue => 
// js Built in Error => Non-enumerable  //so error message => non-enumerable property

// res.send(err) => convert js obj to JSON
// json only includes enumerable properties, that's why express skip message, stack
// 

//so, browser doesn't show message, and stack
// but in terminal => node has  special logic for printing Error obj

// we need to manually send it to browser 