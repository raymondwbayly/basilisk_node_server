// This is the user service

var db = require('../../controllers/database.controller');
var User = require('../../../../lib/core/models/User');

const listUsers = () => {
    return db.listTable('users');
}

const searchUsers = (value) => {
    return db.searchTable('users', value);
}

const addUser = (usr) => {
    var newUser = new User;
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

const updateUser = (usr) => {
    var newUser = new User;
    var UserRecords = db.listTable('users');
    var tmpInd = db.findRecordIndex(UserRecords, usr.id.toString());
    newUser.setID(usr.id);
    newUser.setFirstname(usr.firstname);
    newUser.setLastName(usr.lastname);
    newUser.setEmail(usr.email);
    newUser.setPassword(usr.password);
    newUser.setPhone(usr.phone);
    newUser.setMobile(usr.mobile);
    newUser.setProfilePic(usr.profilepic);
    newUser.setActive(usr.active);
    UserRecords[tmpInd].firstname = newUser.getFirstName();
    UserRecords[tmpInd].lastname = newUser.getLastName();
    UserRecords[tmpInd].email = newUser.getEmail();
    UserRecords[tmpInd].password = newUser.getPassword();
    UserRecords[tmpInd].phone = newUser.getPhone();
    UserRecords[tmpInd].mobile = newUser.getMobile();
    UserRecords[tmpInd].profilepic = newUser.getProfilePic();
    UserRecords[tmpInd].active = newUser.getActive();
    db.updateTable('users', UserRecords);
    return newUser.getJSON();
}

const setActive = (id) => {
    var UserRecords = db.listTable('users');
    var tmpInd = db.findRecordIndex(UserRecords, id);
    if(UserRecords[tmpInd].active === 'true'){
        UserRecords[tmpInd].active = 'false'
    } else {
        UserRecords[tmpInd].active = 'true'
    }
    db.updateTable('users', UserRecords);
    return [{"id":id}];
}

// TODO update the User service to delete a record
const deleteUser = (id) => {
    return [];
}



exports.listUsers = listUsers;
exports.searchUsers = searchUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.setActive = setActive;
exports.deleteUser = deleteUser;