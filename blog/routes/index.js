var express = require('express');
var User = require('../controllers/user.js');
var router = express.Router();
var Blog = require('../controllers/blog');
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
router.get('/login',User.login);
router.post('/login',User.do_login);
router.get('/unlogin',User.unlogin);
router.post("/check",User.checkname);

router.get('/index',checklogin);
router.get('/index',Blog.index);
//文章相关
router.get("/newBlog",Blog.add);
router.post("/newBlog",Blog.do_add);
router.get('/search',Blog.do_search);

router.get("/perindex/:cataid",Blog.perindex);
router.get("/viewPost_logined/:bid",Blog.show_detail_by_page);
//文章分类相关
router.get('/blogCatalogs',Blog.add_catalog);
router.post('/addBlogCatalog',Blog.addBlogCatalog);
router.get("/editCatalog",Blog.editCatalog);
router.post('/updateCatalog',Blog.updateCatalog);
router.get('/delCatalog',Blog.delCatalog);
function checklogin(req,res,next){
  if(req.session.id){
    next();
  }else{
    res.redirect('/login');
  }
}
module.exports = router;
