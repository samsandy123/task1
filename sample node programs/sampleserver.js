var http=require('http');
var fun =require('./module2');
// function response(req,res)
// {
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.write(fun.fun());
//   res.end();
// }
http.createServer(fun.func).listen(4000);
