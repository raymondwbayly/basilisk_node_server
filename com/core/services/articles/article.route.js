var express = require('express');
var router = express.Router();

// TODO Add the Middle Ware Route Authorization to the article service

var articleService = require('./article.service');
var responseObj = require('../../controllers/response.controller');

/* GET List Users. */
router.get('/', function(req, res) {
  res.send(responseObj.buildResponse('Articles', 'Lists the Articles on the server', articleService.listArticles()));
});

/* GET Search Users. */
router.get('/search/:uid', function(req, res) {
  //req.params.uid
  res.send(responseObj.buildResponse('Articles', 'Searches Articles with the title of ' + req.params.uid, articleService.searchArticles(req.params.uid)));
});

/* POST Create User. */
router.post('/', function(req, res) {
  res.send(responseObj.buildResponse('Articles', 'Adds an Article to the server ', articleService.addArticle(req.body)));
});

/* PUT Update User. */
router.put('/', function(req, res) {
  res.send(responseObj.buildResponse('Articles', 'Article ' + req.body.title + ' Updated on the server', articleService.updateArticle(req.body)));
});

/* DELETE Update User. */
router.delete('/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Articles', 'Delete is disabled on this version', articleService.deleteArticle(req.params.uid)));
});

/* PUT Update Active Flag. */
router.get('/active/:uid', function(req, res) {
  res.send(responseObj.buildResponse('Articles', 'Updates the active flag ', articleService.setActive(req.params.uid)));
});

module.exports = router;
