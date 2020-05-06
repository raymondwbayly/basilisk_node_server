var express = require('express');
var router = express.Router();
var service = require('./service');
var task = require('./index');

// TODO Add the Middle Ware Route Authorization to the user service


var responseObj = require('../../controllers/response.controller');

/* GET List Records */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Lists the Tasks on the server', service.list()));
});

/* GET Single Record */
router.get('/:uid', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Returns Record based on ID', service.get(req.params.uid)));
});

/* POST Create Record */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Adds Task to the Server ', service.add(req.body)));
});

module.exports = router;
