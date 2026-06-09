module.exports = (schema) => {
  return (req, res, next) => {
    const {error} = schema.validate(req.body);

    // console.log(error.message);
    
    if(error){
        return next(error)
    }

    next()
  };
};



// joi:
// # Stop validation after the first error. that's why we can see just one error message
// abortEarly: true
// # Error message in terminal =>Nodejs show it in a special way

