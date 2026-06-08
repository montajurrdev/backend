module.exports = (fn) => {
return (req, res, next) =>{
    Promise.resolve(
        fn(req, res, next)
    ).catch(next)

}
};


//
//
// express can't execute (fn) =>{} without (req, res, next)=>{}
    
    // asyncHandler function will return a middleware => express execute this middleware actually

//  async function always return a promise. so
// fn(req, res, next) => registerUser(req, res, next) => return a promise

// Promise.resolve(fn(req, res, next)) => Promise.resolve(promise)
// it return, either resolve=issue solve, or reject

// suppose throw new AppError("Boom");
// so, it still become => Promise.reject(AppError("Boom"))

// then .catch(next) run => it catch reject error => next(error) => express receive the error
// after that globalMiddleware handle it
