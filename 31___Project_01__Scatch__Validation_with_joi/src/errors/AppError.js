class AppError extends Error {
  constructor(message, statusCode, errors = []) {
    super(message);
    // internally set => this.message = message, why super => it's constructor of Error(message)

    this.statusCode = statusCode;

    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; // ternary operator

    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError


// error = []  for validation => for return an array of error

// before 
// new AppError("Validation failed", 400);

// after
// new AppError("Validation failed", 400, ["error1", "error2"]);



// class => create a class
// AppError => class name AppError
// extends Error => based on JS's built in Error

// because js already has Error handler
// => const err = new Error("Something went wrong")
// that mean's : AppError is child class of Error (parent class)

// constructor function => built in special method in js class to building class structure
// two parameter => being AppError parameter

// super(message) => parent constructor => equivalent to Error(message)
// since AppError extends Error, must call the parent constructor
// it sets => this.message = message
// mean's => AppError er message hobe Error massage er moto

// this.statusCode = statusCode
// it set => constructor er statusCode ti hobe AppError({obj}) obj er property

// this.something => this mean'S = current obj, something it's property

// status => we are not parameter, we just set status based on statusCode
// that mean's, we can't give/ don't need to give status on AppError
// we just set a AppError obj property

// Error.captureStackTrace()

// when an error happens => Node create a stack trace and give the list of function calls
// Error: User not found
//     at getUser (...)
//     at login (...)
//     at app.js (...)

// without captureStack, the constructor itself appears in the stack
// with it=> node remove the constructor from the trace
// and start from where th error created

// building any class
// class User{
//     constructor(name, age){
//         this.name =  name
//         this.age = age
//     }
// }

// but we built AppError based on JavaScript Error


// 400 = Bad Request
// 401 = Unauthorized
// 403 = Forbidden
// 404 = Not Found
// 409 = Conflict
// 500 = Server Error