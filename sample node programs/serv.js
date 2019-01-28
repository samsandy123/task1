var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text.plain'});
    res.end('hey vegeta');
});
server.listen(8000,'127.0.0.1');
console.log('listening to port 3000');
