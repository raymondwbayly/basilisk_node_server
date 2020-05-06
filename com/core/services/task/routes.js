var express = require('express');
var router = express.Router();
var tService = require('./service');

// TODO Add the Middle Ware Route Authorization to the user service


var responseObj = require('../../controllers/response.controller');

/* GET List . */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse(tService.getCategory(), 'Lists the Tasks on the server', tService.getData()));
});

module.exports = router;
