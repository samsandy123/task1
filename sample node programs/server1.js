var http =require('http');
function onRequest(req,res)
{
   res.writeHead(200,{'Content-Type':'text\plain'});
   res.write('hello world');
   res.end();
}
http.createServer(onRequest).listen(8000);//we are creating a server to listen on 8000 port number
