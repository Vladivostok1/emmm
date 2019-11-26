var express = require('express');
var User = require('../controllers/user.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/laoshan', function(req, res, next) {
  var arr = ['h1','h2','h3'];
  res.render('test.ejs', { 'girlname':arr});
});
router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
module.exports = router;
