const AppError = require("../errors/AppError");

module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false
    });

    if (error) {
      // console.log(error.message);

      // return next(error);
      return next(new AppError(error.message, 400));
    }

    next();
  };
};


// joi error just send message. no status code
// that's why joi Error => convert => AppError


// joi:
// # Stop validation after the first error. that's why we can see just one error message
// abortEarly: true

// we can change it to => abortEarly: false, means
// Don't stop at the first error.
// Collect all errors.

// # Error message in terminal =>Nodejs show it in a special way
