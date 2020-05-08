// This is the user service
const userService = require('../user/service');


const verifyUserToken = (token) => {
    return true;
}

const verifyDeviceToken = (token) => {
    return true;
}

const getUser = (user,pass) => {
    return userService.getLoggedIn(user,pass); 
}


exports.verifyUserToken = verifyUserToken;
exports.verifyDeviceToken = verifyDeviceToken;
exports.getUser = getUser;