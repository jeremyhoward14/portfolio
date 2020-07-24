var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('art', { title: 'Art Website | Jeremy Howard' });
});

module.exports = router;
