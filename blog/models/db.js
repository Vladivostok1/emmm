var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'blog'
// });
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

exports.query = function (sql, param, callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(sql, param, function (error, results, fields) {
            connection.release();
            callback(error, results);
            if (error) throw error;
        });
    });



    // connection.connect();

    // connection.query('SELECT * from t_users', function (error, results, fields) {
    //     if (error) throw error;
    //     // console.log('The solution is: ', results[0].solution);
    //     callback(error,results);
    //     connection.end();
    // });
}