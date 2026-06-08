// function validateUser(data) {
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

// module.exports.validateUser = validateUser;


//
//
// making reusable

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

// function validateUser(data) {
//   const errors = [];

//   const nameError = required(data.fullname, "Full Name");
//   const emailError = required(data.email, "Email");
//   const nameLengthError = minLength(data.fullname, 3, "Full Name")

//   if (nameError) {
//     errors.push(nameError);
//   }

//   if (emailError) {
//     errors.push(emailError);
//   }

//   if (nameLengthError) {
//     errors.push(nameLengthError);
//   }

//   return errors;
// }

// module.exports.validateUser = validateUser;




//
//
// validate with schema => closed to joi
//
//
function validateUser(data, schema){
    const errors = []

for(let key in schema){
    const rules =  schema[key]
    const value = data[key]

    if(rules.required && !value){
        errors.push(`${key} is required`)
    }
    if(rules.minLength && value && value.length < rules.minLength ){
        errors.push(`${key} must be at least ${rules.minLength} characters`)

    }
}

    return errors
}

module.exports.validateUser = validateUser



// rules declared in schema
// type: String,
// minLength: 3,
// required: true,
