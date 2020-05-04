// This is the user service

var db = require('../../controllers/database.controller');

const listUsers = () => {
    return db.list('users');
}



exports.listUsers = listUsers;