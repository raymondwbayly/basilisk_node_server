var express = require('express');
var cfgController = require('../../controllers/config.controller');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cfg = cfgController.getConfig();
  res.render('index', { title: cfg.name, codename: cfg.codename,developer: cfg.developer,company: cfg.company, version: cfg.version });
});

module.exports = router;
