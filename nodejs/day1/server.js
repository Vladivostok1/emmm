var http = require('http');
var fs = require('fs');
var url = require('url');
var join = require("join");
http.createServer(function (req, res) {
    var newpath = url.parse(req.url).pathname;
    switch (newpath) {
        case "/":
            getIndex(res);
            break;
        case "/img": getImage(res);
            break;
        default:
            getFault(res);
            break;
    }
}).listen(3000);
console.log("listen  post 3000");
function getIndex(res){
    var indexPath = __dirname + "/static/"+url.parse("index.html").pathname;
    var indexdata = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"content-type":"text/html"});
    res.end();

}
function getImage(res){
    
}
function getFault(res){
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("no page founded");
}
