// This is the user service

var db = require('../../controllers/database.controller');
var User = require('../../../../lib/core/models/User');



var newUser = new User;

const listUsers = () => {
    return db.listTable('users');
}

const searchUsers = (value) => {
    return db.searchTable('users', value);
}

const addUser = (usr) => {
    newUser.setID(db.getNextID('users'));
    newUser.setFirstname(usr.firstname);
    newUser.setLastName(usr.lastname);
    newUser.setEmail(usr.email);
    newUser.setPassword(usr.password);
    newUser.setPhone(usr.phone);
    newUser.setMobile(usr.mobile);
    newUser.setProfilePic(usr.profilepic);
    newUser.setActive(usr.active);
    return db.addToTable('users', newUser.getJSON());
}

const updateUser = () => {
    return [];
}

const setActive = () => {
    return [];
}

const deleteUser = () => {
    return [];
}



exports.listUsers = listUsers;
exports.searchUsers = searchUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.setActive = setActive;
exports.deleteUser = deleteUser;