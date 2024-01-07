var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){

    // read file 
   fs.readFile('f.txt',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
   })
   // append time on file 
   fs.appendFile('f.txt','New Updated Data',function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
   })
}).listen(4000);