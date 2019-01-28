var http=require('http');
var fs=require('fs');
function response(req,res)
{
   res.writeHead(200,{'Content-Type':'text/html'});
   var data=fs.readFileSync('./index.html','utf8');
   res.write(data);
   res.end();
}
http.createServer(response).listen(3000);
