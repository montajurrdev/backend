const AppError = require("../errors/AppError");

module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      // console.log(error);
      // return next(error);
      // return next(new AppError(error.message, 400));

      const errors = error.details.map((detail) => detail.message);

      return next(new AppError("Validation failed", 400, errors));
    }

    next();
  };
};


// joi give us => error => message, original, details
// details => array of all errors => inside error obj (message)


// so, all message => push => error array => AppError => globalErrorHandler
// error.details.map(detail => detail.message) => map return a array of result

// now AppError have 3 arguments


// joi error just send message. no status code
// that's why joi Error => convert => AppError

// joi:
// # Stop validation after the first error. that's why we can see just one error message
// abortEarly: true

// we can change it to => abortEarly: false, means
// Don't stop at the first error.
// Collect all errors.

// # Error message in terminal =>Nodejs show it in a special way
