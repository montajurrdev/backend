

module.exports.root = (req, res,next) => {
  let error = req.flash("error"); // array

  res.render("index", { error, loggedIn: false });
}

