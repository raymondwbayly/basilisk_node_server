var express = require('express');
var router = express.Router();

// TODO Add the Middle Ware Route Authorization to the user service

var categoryService = require('./category.service');
var responseObj = require('../../controllers/response.controller');

/* GET List Categories. */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Categories', 'Lists the Categories on the server', categoryService.listCategories()));
});

/* GET Search Categories. */
router.get('/search/:uid', function(req, res) {
  //req.params.uid
  res.send(responseObj.buildResponse('Categories', 'Searches the Categories by Name ' + req.params.uid, categoryService.searchCategories(req.params.uid)));
});

/* POST Create Category. */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse('Categories', 'Adds Category to Server ', categoryService.addCategory(req.body)));
});

/* PUT Update Category. */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse('Categories', 'Category ' + req.body.name  + ' Updated on the Server', categoryService.updateCategory(req.body)));
});

/* DELETE Remove Category. */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Categories', 'Delete is disabled on this version', categoryService.deleteCategory(req.params.uid)));
});

/* PUT Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Categories', 'Category Active Flag has been set ', categoryService.setActive(req.params.uid)));
});

module.exports = router;
