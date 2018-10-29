var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '404412289', name: '羅宇凡' });
});

module.exports = router;
