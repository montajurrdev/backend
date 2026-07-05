

module.exports.root = (req, res,next) => {
  let error = req.flash("error"); // array
  let success = req.flash("success"); // array

  res.render("index", { error, success, loggedIn: false });
}

