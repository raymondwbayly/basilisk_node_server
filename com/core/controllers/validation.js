// Validator
var emailValidator = require("email-validator");



const validateEmail = (email) => {
    return emailValidator.validate(email);
}


exports.validateEmail = validateEmail;