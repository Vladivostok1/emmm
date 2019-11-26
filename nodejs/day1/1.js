var fs = require('fs');
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err)throw err;
    else getData(data);
})
function getData(data){
    setTimeout(function(){
        console.log(data);
    },2000)
}
console.log('fafaf')