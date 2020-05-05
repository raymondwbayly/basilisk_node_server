var express = require('express');
var router = express.Router();

// TODO Add the Middle Ware Route Authorization to the user service

var userService = require('./user.service');
var responseObj = require('../../controllers/response.controller');

/* GET List Users. */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'This Service Lists Users from the data tables', userService.listUsers()));
});

/* GET Search Users. */
router.get('/search/:uid', function(req, res) {
  //req.params.uid
  res.send(responseObj.buildResponse('Users', 'Search Results from Searching Last Name for ' + req.params.uid, userService.searchUsers(req.params.uid)));
});

/* POST Create User. */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'User added to the server ', userService.addUser(req.body)));
});

/* PUT Update User. */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'User ' + req.body.firstname + ' ' + req.body.lastname + ' Updated on the server', userService.updateUser(req.body)));
});

/* DELETE Update User. */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'Delete is disabled on this version', userService.deleteUser(req.params.uid)));
});

/* PUT Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Users', 'User Active Flag has been set ', userService.setActive(req.params.uid)));
});

module.exports = router;
