const fs=require('fs');
let content='';
var readstream=fs.createReadStream('f1.txt');
readstream.on('data',function(chunk){
    content+=chunk
})
readstream.on('end',function(){
    console.log(content);
})