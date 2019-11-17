console.log("start");

for (var i = 0; i < 10; i++) {
    exec(i+1,function(i){
        console.log(i);
    })
}
function exec(param,callback){
    setTimeout(function(){
        callback(param);
    },200)
}
console.log("end");