const fs=require('fs');
let content='Hello Test';
var writeStream=fs.createWriteStream('f2.txt');
writeStream.write(content,'utf-8');
writeStream.end();
writeStream.on('finish',function(){
    console.log('Data Write Done');
})