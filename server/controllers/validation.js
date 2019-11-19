const Joi = require("joi")

const signupValidation = {
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
}

module.exports = {
  signupValidation
}
