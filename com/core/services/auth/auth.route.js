var express = require('express');
var router = express.Router();

var authService = require('./auth.service');

/* GET Auth listing. */
router.get('/', function(req, res) {
  res.send({'server':'Beowulf MSE', 'version':'0.1.0-alpha', 'message':'This is the default auth URI'});
});


// Setting up the user authorization calls

/* GET Auth listing. */
router.get('/user', function(req, res) {
  res.send({'server':'Beowulf MSE', 'version':'0.1.0-alpha', 'message':'This is the default auth URI'});
});

/* POST Authorize User. */
router.post('/user', function(req, res) {
  res.send('To Authorize the user send a post with the token object to this URI');
});

// Setting up the device authorization calls

/* GET Device Auth URI */
router.get('/device', function(req, res) {
  res.send({'server':'Beowulf MSE', 'version':'0.1.0-alpha', 'message':'This is the default auth URI'});
});

/* POST Device Auth URI */
router.post('/device', function(req, res) {
  res.send('Authorize Device');
});

module.exports = router;
