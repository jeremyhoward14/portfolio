var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sit', { title: 'Student IT | Jeremy Howard' });
});

module.exports = router;
