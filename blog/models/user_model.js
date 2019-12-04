var DB = require("./db");
exports.insert = function (email,nickname,pass,callback) {
    // var sql = "select * from t_users where ACCOUNT=? and PASSWORD = ?";
    var sql = "insert into t_users(ACCOUNT,NAME,PASSWORD) values(?,?,?)";
    DB.query(sql,[email,nickname,pass],callback);

}

exports.check_name = function(email,callback){
    var sql = "select * from t_users where ACCOUNT = ?";
    DB.query(sql,[email],callback);
}

exports.get_name_by_pass = function(email,pass,callback){
    var sql = "select * from t_users where ACCOUNT = ? and PASSWORD = ?";
    DB.query(sql,[email,pass],callback);
}
