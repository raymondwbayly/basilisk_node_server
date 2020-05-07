var express = require('express');
var router = express.Router();

var authService = require('./auth.service');
var responseObj = require('../../controllers/response');

/* GET Auth listing. */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Auth', 'This is the default URI for the Auth Service', []));
});


// Setting up the user authorization calls

/* GET Auth listing. */
router.get('/user', function(req, res) {
  res.send(responseObj.buildResponse('Auth-User', 'This is the User default URI for the Auth Service', []));
});

/* POST Authorize User. */
router.post('/user', function(req, res) {
  var user = req.body.user;
  var pass = req.body.pass;
  var token = req.body.token;
  res.cookie('user-token', token).send(res.send(responseObj.buildResponse('Auth-User', 'User Cookie has been set for user ' + user, [])));
});

// Setting up the device authorization calls

/* GET Device Auth URI */
router.get('/device', function(req, res) {
  res.send(responseObj.buildResponse('Auth-Device', 'This is the device URI for the Auth Service', []));
});

/* POST Device Auth URI */
router.post('/device', function(req, res) {
  var id = req.body.id;
  var secret = req.body.secret;
  var token = req.body.token;
  res.cookie('device-token', token).send(res.send(responseObj.buildResponse('Auth-User', 'Device Cookie has been set for device ' + id, [])));
});

module.exports = router;
