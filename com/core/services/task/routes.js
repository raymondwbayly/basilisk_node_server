var express = require('express');
var router = express.Router();
var Svc = require('./service');

// TODO Add the Middle Ware Route Authorization to the user service


var responseObj = require('../../controllers/response.controller');

router.get('/', function(req, res) {
  res.send(responseObj.buildResponse(Svc.getCategory(), 'Lists the Tasks on the server', Svc.list()));
});

router.get('/:uid', function(req, res) {
  res.send(responseObj.buildResponse(Svc.getCategory(), 'Lists the Tasks on the server', Svc.get(req.params.uid)));
});

module.exports = router;
