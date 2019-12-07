var db = require('./db');

exports.show_articles_by_name = function(uid,callback){
    var sql="select t_blogs.TITLE,t_blogs.ADD_TIME,t_blog_catalogs.NAME as CNAME,t_blogs.CLICK_RATE,t_blogs.CONTENT,t_blogs.BLOG_ID from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blog_catalogs.CATALOG_ID=t_blogs.CATALOG_ID and t_blogs.WRITER=?";
	db.query(sql,[uid],callback);
} 
exports.sel_cata_by_uid = function(uid,callback){
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.USER_ID = ?";
    db.query(sql,[uid],callback);
}
exports.sel_cata_by_uid_cataname = function(uid,cataname,callback){
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.USER_ID = ? and t_blog_catalogs.NAME = ?";
    db.query(sql,[uid,cataname],callback);
}
exports.insert_catablog = function(uid,cataname,callback){
    var sql = "insert into t_blog_catalogs(NAME,USER_ID) values(?,?)";
    db.query(sql,[cataname,uid],callback);
}
exports.sel_catadata = function(cid,callback){
    var sql = "select * from t_blog_catalogs where t_blog_catalogs.CATALOG_ID = ?";
    db.query(sql,[cid],callback);
}
exports.update_cataname = function(cid,cname,callback){
    var sql = "update t_blog_catalogs set NAME = ? where CATALOG_ID = ?";
    db.query(sql,[cname,cid],callback);
}
exports.del_cataname = function(cid,callback){
    var sql = "delete from t_blog_catalogs where CATALOG_ID = ?";
    db.query(sql,[cid],callback);
}