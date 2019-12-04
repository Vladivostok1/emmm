var User_model = require('../models/user_model');
exports.reg = function (req, res, next) {
    res.render('reg');
}
exports.do_reg = function (req, res, next) {
    var email = req.body.email;
    var nickname = req.body.name;
    var pass = req.body.pwd;
    // console.log(email);
    User_model.check_name(email, function (error, data) {
        if (data.length > 0) {
            res.redirect('/reg');
        } else {
            User_model.insert(email, nickname, pass, function (error, data) {
                // console.log(data);
                if (data.affectedRows == 1) {
                    res.redirect('/login');
                }
            });
        }
    });
}
exports.login = function(req,res,next){
    res.render("login");
}
exports.do_login = function(req,res,next){
    var email = req.body.email;
    var pass = req.body.pwd;
    User_model.get_name_by_pass(email,pass,function(err,data){
        if(data.length>0){
            req.session.id = data[0].USER_ID;
            req.session.nickname = data[0].NAME;
            res.redirect('/index');
        }
    })
}
exports.checkname = function (req, res, next) {
    var email = req.body.account;
    User_model.check_name(email, function (error, data) {
        if (data.length > 0) {
            res.send("success");
            // res.json({
            //     'name':'success',
            // })
        }else{
            res.send("failed");
        }
    });
}

exports.index = function(req,res,next){
    res.render("index_logined",{'sess':req.session});
}

exports.unlogin = function(req,res,next){
    req.session = null;
    res.redirect('/index');
}