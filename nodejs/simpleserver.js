const http=require('http');
http.createServer(function(req,res){
   // res.writeHead(200,{'Content-Type':'application/json'});
   console.log('Server is running on 3000');
   // res.write(req.url);
   // res.end('Hello World');
   const data = { message: 'Hello, World!' };
  res.end(JSON.stringify(data));
}).listen(3000);



// repo https://github.com/LinkedInLearning/learning-the-javascript-language-4369302




