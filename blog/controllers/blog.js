var Blog_model = require('../models/blog_model');

exports.index = function (req, res, next) {

    var uid = req.session.id;
    // console.log(req.session);
    Blog_model.show_articles_by_name(uid, function (err, data) {
        // console.log(data);
        if (data.length > 0) {
            res.render("index_logined", {
                'sess': req.session,
                'blogs': data
            });
        }
    })
}
exports.add = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.sel_cata_by_uid(uid, function (err, data) {
        if (data.length > 0) {
            res.render("newBlog", {
                'sess': req.session,
                'catas': data
            })
        }
    })
}
exports.do_add = function (req, res, next) {
   
}

exports.add_catalog = function (req, res, next) {
    var uid = req.session.id;
    Blog_model.sel_cata_by_uid(uid, function (err, data) {
        if (data.length > 0) {
            res.render("blogCatalogs", {
                'sess': req.session,
                'catas': data,
            });
        }
    });
}
exports.addBlogCatalog = function (req, res, next) {
    var cataname = req.body.name;
    var uid = req.session.id;
    Blog_model.sel_cata_by_uid_cataname(uid, cataname, function (err, data) {
        if (data.length > 0) {
            res.redirect('/newBlog');
        } else {
            Blog_model.insert_catablog(uid, cataname, function (err, data) {
                if (data.affectedRows == 1) {
                    res.redirect('/blogCatalogs');
                }
            })
        }
    })
}
exports.editCatalog = function (req, res, next) {
    var cid = req.query.cid;
    // Blog_model.sel_cata_by_uid(uid, function (err, data) {
    //     if (data.length > 0) {
    //         res.render("blogCatalogs", {
    //             'sess': req.session,
    //             'catas': data,
    //         });
    //     }
    // });
    Blog_model.sel_catadata(cid, function (err, data) {
        if (data.length > 0) {
            res.render('editCatalog', {
                'sess': res.session,
                'cata': data[0]
            })
        }
    })
} 
exports.updateCatalog = function(req,res,next){
    var cid = req.body.hcid;
    var cname = req.body.name;
    Blog_model.update_cataname(cid,cname,function(err,data){
        if(data.affectedRows == 1){
            res.redirect('/blogCatalogs');
        }
    })
}
exports.delCatalog = function(req,res,next){
    var cid = req.query.cid;
    Blog_model.del_cataname(cid,function(err,data){
        if(data.affectedRows == 1){
            res.redirect('/blogCatalogs');
        }
    })
}