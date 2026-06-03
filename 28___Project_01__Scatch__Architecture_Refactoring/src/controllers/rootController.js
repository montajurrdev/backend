

module.exports.root = (req, res) => {
  let error = req.flash("error"); // array

  res.render("index", { error, loggedIn: false });
}

