var express = require('express');
var cfgController = require('../../controllers/config');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cfg = cfgController.getConfig();
  res.render('index', { title: cfg.name, codename: cfg.codename,build: cfg.build ,developer: cfg.developer,company: cfg.company, version: cfg.version });
});

module.exports = router;
