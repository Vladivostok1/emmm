
for(var i = 1;i<=10;i++){
    exec(i,function(i){
        console.log(i);
    })
}
function exec(param,callback){
    setTimeout(function(){
        callback(param);
    },200)
}