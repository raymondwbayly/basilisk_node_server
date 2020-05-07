// Validator
var emailValidator = require("email-validator");
var passwordValidator = require('password-validator');

var schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values



const validateEmail = (email) => {
    return emailValidator.validate(email);
}

const validatePassword = (password) => {
    return schema.validate(password);
}

const passwordValidationDetails = (password) => {
    return schema.validate(password, { list: true });
}


exports.validateEmail = validateEmail;
exports.validatePassword = validatePassword;
exports.passwordValidationDetails = passwordValidationDetails;