var Blog_model  = require('../models/blog_model');

exports.index = function(req,res,next){

    var uid = req.session.id;
    Blog_model.show_articles_by_name(uid,function(err,data){
        
    })
    res.render("index_logined",{'sess':req.session});
}