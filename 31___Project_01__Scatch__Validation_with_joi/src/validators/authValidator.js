const Joi = require("joi");

const registerSchema = Joi.object({
  fullname: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});



module.exports.registerSchema = registerSchema;




// registerSchema only create a set of rules.

// like School exam rules => must have roll num, name, signature

// the rules themselves don't check anything
// they only define requirements


// joi already know how to validate
// we don't need to validate manually like custom validator
// if (!fullname) ...
// if (fullname.length < 3) ...
// if (!email.includes("@")) ...

// so joi automatically validate data. and schema just a set of rules