const AppError = require("../errors/AppError");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403),
      );
    }
    next()
  };
};

// ...roles => rest parameter
// we can pass unlimited values using rest parameter
// it give us an array
