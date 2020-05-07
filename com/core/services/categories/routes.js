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

/* GET Search Record */
router.get('/search/:uid', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), 'The ' + core.getTitle() + ' Searched for ' + req.params.uid, service.search(req.params.uid)));
});

/* POST Create Record */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), 'Adds ' + core.getTitle() + ' to the Server ', service.add(req.body)));
});

/* PUT Update Record. */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), core.getTitle() + '  ' + req.body.name  + ' Updated on the Server', service.update(req.body)));
});

/* DELETE Remove Record. */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), 'Delete is disabled on this version', service.remove(req.params.uid)));
});

/* GET Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse(core.getCategory(), ' Active Flag has been set ', service.active(req.params.uid)));
});

module.exports = router;
