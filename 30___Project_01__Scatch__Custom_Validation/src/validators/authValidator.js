// function validateRegister(data) {
//   const errors = [];
//   if (!data.fullname) {
//     errors.push("Name is required");
//   }

//   if (data.fullname && data.fullname.length < 3) {
//     errors.push("Name must be at least 3 characters");
//   }

//   if (!data.email) {
//     errors.push("Email is required");
//   }

//   if (!data.password) {
//     errors.push("Password is required");
//   }

//   return errors;
// }

// module.exports.validateRegister = validateRegister;

//
//
// making reusable

// rules
// function required(value, fieldName) {
//   if (!value) {
//     return `${fieldName} is required`;
//   }
// }
// function minLength(value, length, fieldName) {
//   if (value && value.length < length) {
//     return `${fieldName} must be at least 3 characters`;
//   }
// }

// // validate
// function validateRegister(data) {
//   const errors = [];

//   const nameError = required(data.fullname, "Full Name");
//   const emailError = required(data.email, "Email");
//   const passwordError = required(data.password, "Password");
//   const nameLengthError = minLength(data.fullname, 3, "Full Name")

//   if (nameError) {
//     errors.push(nameError);
//   }

//   if (emailError) {
//     errors.push(emailError);
//   }
//   if (passwordError) {
//     errors.push(passwordError);
//   }

//   if (nameLengthError) {
//     errors.push(nameLengthError);
//   }

//   return errors;
// }

// module.exports.validateRegister = validateRegister;

//
//
// validate with schema => closed to joi

// function validateRegister(data, schema){
//     const errors = []

// for(let key in schema){
//     const rules =  schema[key]
//     const value = data[key]

//     if(rules.required && !value){
//         errors.push(`${key} is required`)
//     }
//     if(rules.minLength && value && value.length < rules.minLength ){
//         errors.push(`${key} must be at least ${rules.minLength} characters`)

//     }
// }

//     return errors
// }

// module.exports.validateRegister = validateRegister

// rules declared in schema
// type: String,
// minLength: 3,
// required: true,

// another way/ professional way with schema and validate middleware

function validateRegister(schema) {
  return (data) => {
    const errors = [];

    for (let key in schema) {
      const rules = schema[key];
      const value = data[key];

      if (rules.required && !value) {
        errors.push(`${key} is required`);
      }
      if (rules.minLength && value && value.length < rules.minLength) {
        errors.push(`${key} must be at least ${rules.minLength} characters`);
      }
    }

    return errors;
  };
}

module.exports.validateRegister = validateRegister;



// at routes=> performing time

// it will run like closure
// first, run validateRegister(schema)  then returns (data)=>{}
// then it become => validateMiddleware(
                    //   (data) => {
                    //     // validation logic
                    //   }
                    // )

// inside middleware 
// validate middleware run and get data => req.body

// data becomes => (data => {...})(req.body)



// schema is stored in a closure => inner function remember outer scope variables even after outer scope finished execution
 