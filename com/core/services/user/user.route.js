var express = require('express');
var router = express.Router();

// TODO Add the Middle Ware Route Authorization to the user service

var userService = require('./user.service');
var responseObj = require('../../controllers/response.controller');

/* GET User listing. */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'This is the default URI for the User Service'));
});

module.exports = router;
