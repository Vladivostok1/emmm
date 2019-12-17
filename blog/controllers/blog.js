var Blog_model = require('../models/blog_model');

exports.index = function (req, res, next) {

    var uid = req.session.id;
    // console.log(req.session);
    Blog_model.show_articles_by_name(uid, function (err, data) {
        // console.log(data);
        var blogs = data;
        Blog_model.sel_cata_by_uid(uid, function (err, data) {
            if (data.length > 0) {
                res.render("index_logined", {
                    'sess': req.session,
                    'blogs': blogs,
                    'catas': data
                });
            }
        })
    })
}
exports.perindex = function (req, res, next) {
    var cataid = req.params.cataid;
    var uid = req.session.id;
    Blog_model.show_articles_by_cataid(uid, cataid, function (err, data) {
        if (data.length > 0) {
            //查找出分类数据
            var blogs = data;
            Blog_model.sel_cata_by_uid(uid, function (err, data) {
                if (data.length > 0) {
                    res.render("index_logined", {
                        'sess': req.session,
                        'blogs': blogs,
                        'catas': data,
                    });
                }
            })
        }
    })
}
exports.show_detail_by_page = function (req, res, next) {
    var bid = req.params.bid;
    var uid = req.session.id;
    //console.log(bid);
    Blog_model.update_hits_by_bid(bid, function (err, data) {
        if (data.affectedRows == 1) {
            Blog_model.sel_blogs_by_bid(bid, function (err, data) {
                var newdata = data;
                if (data.length > 0) {
                    //查找当前文章的评论
                    Blog_model.sel_comments_by_bid(bid, function (err, data) {
                        res.render("viewPost_logined", {
                            'sess': req.session,
                            'blog': newdata[0],
                            'comments': data,
                            //'predata':predata[0],
                            //'backdata':backdata[0],
                        })
                    })
                }

            })
        }
    })
    //console.log(data);
    /*
    var times=moment(data[0].ADD_TIME).valueOf();
    console.log(times);
    var now=new Date();
    var newtimes=moment(now).valueOf();
    console.log(newtimes);

    var hours=(newtimes-times)/3600;
    console.log(hours);*/
}
exports.do_search = function (req, res, next) {
    var q = req.query.q;
    Blog_model.search_article_by_name(q, function (err, data) {
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
    var title = req.body.title;
    var cataid = req.body.catalog;
    var con = req.body.newcontent;
    var uid = req.session.id;
    console.log(title + " " + cataid + " " + con + " " + uid);
    Blog_model.insert_data_by_name(uid, cataid, con, title, function (err, data) {
        if (data.affectedRows == 1) {

            Blog_model.update_catas_by_cataid(cataid, function (err, data) {
                if (data.affectedRows == 1) {
                    res.redirect("/index");
                }
            })
        }
    })
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
exports.updateCatalog = function (req, res, next) {
    var cid = req.body.hcid;
    var cname = req.body.name;
    Blog_model.update_cataname(cid, cname, function (err, data) {
        if (data.affectedRows == 1) {
            res.redirect('/blogCatalogs');
        }
    })
}
exports.delCatalog = function (req, res, next) {
    var cid = req.query.cid;
    Blog_model.del_cataname(cid, function (err, data) {
        if (data.affectedRows == 1) {
            res.redirect('/blogCatalogs');
        }
    })
}