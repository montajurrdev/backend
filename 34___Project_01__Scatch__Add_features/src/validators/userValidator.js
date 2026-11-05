const joi = require("joi");

const updateProfileSchema = joi.object({
    fullname: joi.string().min(3).max(50).required(),
    contact:  joi.number().required(),
})

module.exports = {updateProfileSchema,}
