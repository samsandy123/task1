var http=require('http');
var fs=require('fs');
function response(req,res)
{
   res.writeHead(200,{'Context-Type':'text/html'});
   var re=fs.createReadStream(__dirname+'/index.html','utf8');
   re.pipe(res);
}
http.createServer(response).listen(5000);
console.log(__dirname);
