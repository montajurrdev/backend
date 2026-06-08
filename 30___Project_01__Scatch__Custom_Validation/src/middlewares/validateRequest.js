const AppError = require("../errors/AppError");

function validate(validator) {
  return (req, res, next) => {
    const errors = validator(req.body);

    // console.log(errors);

    if (errors.length > 0) {
      return next(new AppError(errors.join(","), 400));
    }

    next();
  };
}

module.exports = validate;

// it work for synchonous error(validator)
// throw new AppError(errors.join(","), 400);  // bad request => invalid data

// but, if validator is async, express don't pass err automatically to next()
// that's why
// return next(new AppError(errors.join(","), 400))
// it means: telling express, here is an error, go to the error middleware
// since we know it error, so next(error) without throw
// return for stop execution
// after found error, otherwise bottom next() will be run
