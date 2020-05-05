var express = require('express');
var router = express.Router();

// TODO Add the Middle Ware Route Authorization to the user service

var taskService = require('./task.service');
var responseObj = require('../../controllers/response.controller');

/* GET List . */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Tasks', 'Lists the Tasks on the server', taskService.listTasks()));
});

/* GET Search . */
router.get('/search/:uid', function(req, res) {
  //req.params.uid
  res.send(responseObj.buildResponse('Tasks', 'Searches the Tasks by Name ' + req.params.uid, taskService.searchTasks(req.params.uid)));
});

/* POST Create . */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse('Tasks', 'Adds Task to Server ', taskService.addTask(req.body)));
});

/* PUT Update . */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse('Tasks', 'Task ' + req.body.name  + ' Updated on the Server', taskService.updateTask(req.body)));
});

/* DELETE Remove . */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Tasks', 'Delete is disabled on this version', taskService.deleteTask(req.params.uid)));
});

/* PUT Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Tasks', 'Task Active Flag has been set ', taskService.setActive(req.params.uid)));
});

module.exports = router;
