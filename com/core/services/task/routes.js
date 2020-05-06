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

/* GET Search Record */
router.get('/search/:uid', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Records Searched for ' + req.params.uid, service.search(req.params.uid)));
});

/* POST Create Record */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Adds Task to the Server ', service.add(req.body)));
});

/* PUT Update Record. */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Task ' + req.body.name  + ' Updated on the Server', service.update(req.body)));
});

/* DELETE Remove Record. */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), 'Delete is disabled on this version', service.remove(req.params.uid)));
});

/* GET Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse(task.getCategory(), ' Active Flag has been set ', service.active(req.params.uid)));
});

module.exports = router;
