var db = require('./db');

exports.show_articles_by_name = function (uid, callback) {
    var sql = "select t_blogs.TITLE,t_blogs.ADD_TIME,t_blog_catalogs.NAME as CNAME,t_blogs.CLICK_RATE,t_blogs.CONTENT,t_blogs.BLOG_ID from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blog_catalogs.CATALOG_ID=t_blogs.CATALOG_ID and t_blogs.WRITER=?";
    db.query(sql, [uid], callback);
}
exports.show_articles_by_cataid=function(uid,cataid,callback){
	var sql="select t_blogs.TITLE,t_blogs.ADD_TIME,t_blog_catalogs.NAME as CNAME,t_blogs.CLICK_RATE,t_blogs.CONTENT,t_blogs.BLOG_ID from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blog_catalogs.CATALOG_ID=t_blogs.CATALOG_ID and t_blogs.CATALOG_ID=? and t_blogs.WRITER=?";
	db.query(sql,[cataid,uid],callback);
}
exports.update_hits_by_bid=function(bid,callback){
	var sql="update t_blogs set CLICK_RATE=CLICK_RATE+1 where BLOG_ID=?";
	db.query(sql,[bid],callback);
}
exports.sel_comments_by_bid=function(bid,callback){
	var sql="select * from t_comments,t_users where t_users.USER_ID=t_comments.COMMENTATOR and t_comments.BLOG_ID=?";
	db.query(sql,[bid],callback);
}
exports.sel_blogs_by_bid=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID=?";
    db.query(sql,[bid],callback);
}
exports.search_article_by_name = function (search_name, callback) {
    var sql = "select * from t_blogs where TITLE like '%" + search_name + "%'";
    db.query(sql, [], callback);
}
exports.insert_data_by_name = function(uid,cataid,con ,title,callback){
    // 	var dd=moment().format("YYYY-MM-DD hh:mm:ss");
// 	// var sql="insert into t_blogs(CATALOG_ID,WRITER,TITLE,CONTENT,ADD_TIME) values(?,?,?,?,?)";
    var sql = "insert into t_blogs(WRITER,CATALOG_ID,CONTENT,TITLE,ADD_TIME) values(?,?,?,?,now())";
    db.query(sql,[uid,cataid,con,title],callback);
}
exports.update_catas_by_cataid = function(cataid,callback){
    var sql="update t_blog_catalogs set BLOG_COUNT=BLOG_COUNT+1 where CATALOG_ID=?";
	db.query(sql,[cataid],callback);
}

exports.sel_cata_by_uid = function (uid, callback) {
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.USER_ID = ?";
    db.query(sql, [uid], callback);
}
exports.sel_cata_by_uid_cataname = function (uid, cataname, callback) {
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.USER_ID = ? and t_blog_catalogs.NAME = ?";
    db.query(sql, [uid, cataname], callback);
}
exports.insert_catablog = function (uid, cataname, callback) {
    var sql = "insert into t_blog_catalogs(NAME,USER_ID) values(?,?)";
    db.query(sql, [cataname, uid], callback);
}
exports.sel_catadata = function (cid, callback) {
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.CATALOG_ID = ?";
    db.query(sql, [cid], callback);
}
exports.update_cataname = function (cid, cname, callback) {
    var sql = "update t_blog_catalogs set NAME = ? where CATALOG_ID = ?";
    db.query(sql, [cname, cid], callback);
}
exports.del_cataname = function (cid, callback) {
    var sql = "delete from t_blog_catalogs where CATALOG_ID = ?";
    db.query(sql, [cid], callback);
}