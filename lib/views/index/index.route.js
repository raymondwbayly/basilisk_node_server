var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Basilisk Server', version: '0.1.0-alpha' });
});

module.exports = router;
