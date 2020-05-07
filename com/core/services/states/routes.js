var express = require('express');
var router = express.Router();
var service = require('./service');
var core = require('./index');

// TODO Add the Middle Ware Route Authorization to the user service


var responseObj = require('../../controllers/response');

/* GET List Records */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), 'Lists the ' + core.getTitle() + ' on the server', service.list()));
});

/* GET Single Record */
router.get('/:uid', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), 'Returns ' + core.getTitle() + ' based on ID', service.get(req.params.uid)));
});

module.exports = router;
