var ownMongoose = require('../models/mongoose');
var ObjectID = require("mongodb").ObjectID;
var jwt = require('jsonwebtoken');
var secretkey = "secretkey";

exports.do_login = async function (req, res, next) {
    var name = req.body.name;
    var pass = req.body.pass;
    console.log(name + " " + pass);

    //jwtToken---为了解决多服务器跨域传输 session存储问题
	//1、服务器建立session文件{'id':1,'name':'laoshan'}  xhjsfkhsd123(公钥+私钥)
	//2、私钥  session_id:"dsfhjksddhfksd" --->chrome  cookie {'id':1,'name':'laosahn'}
	//3、request cookie session_id

    var token = "";
    var monUserid = "";
    var userInfo = null;

    //1、验证token  2、真正的登录 生成token  async/await--new Promise

    await new Promise((resolve, reject) => {
        var wherestr1 = { "name": name, "password": pass };
        // console.log(wherestr1);
        //mongoose-->connection->db->collection("users").find(wherestr1).toArray()
        ownMongoose.connection.db.collection("user").find(wherestr1).toArray(function (err, result) {
            if (err) {
                res.json({
                    "errno": 0,
                    "errmsg": "数据库查找失败",
                });
            } else {
                //1、userInfor赋值 2、monUserid赋值 3、生成token（userInfor、monUserid）
                // console.log(result);
                if (result.length > 0) {
                    userInfo = result[0];
                    monUserid = result[0]._id;
                    var _id = result[0]._id.toString();
                    // console.log(userInfo);
                    token = jwt.sign({ "name": name, "userid": monUserid }, secretkey, { expiresIn: 1000 * 60 * 60 * 24 * 8 });
                    resolve();
                } else {
                    res.json({
                        "errmsg": "生成token失败",
                        "userInfor": "",
                        //code: 0
                        errno: 1
                    });
                    reject();
                }
            }
        })
    })
    await new Promise((resolve, reject) => {
        ownMongoose.connection.db.collection("user").updateOne(
            { "_id": monUserid },
            { $set: { "token": token } },
            function (err, result) {
                if (err) {
                    res.json({
                        "errno": 2,
                        "errmsg": "token更新数据库失败",
                    });
                } else {
                    var whereStr2 = { "_id": monUserid };
                    ownMongoose.connection.db.collection("user").find(whereStr2).toArray(function (err, result) {
                        //console.log(result);
                        if (result.length > 0) {
                            res.json({
                                "errmsg": "/login,post接口登陆成功",
                                "userInfor": result[0],
                                //code: 2
                                errno: 101
                            });
                        }
                    });
                    resolve();
                }
            }
        )
        resolve();
    })
}

exports.do_register = async function(req,res,next){
    var name = req.body.name;
    var pass = req.body.pass;
    console.log(name + " " + pass);
    await new Promise((resolve,reject)=>{
        // ownMongoose.connection.db.collection("user").save()
    })
}