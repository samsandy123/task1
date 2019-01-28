var url=require('url');
var fs=require('fs');
module.exports.func=function pathman(req,res)
{
  res.writeHead(200,{'Content-Type':'text/html'});
  var path=url.parse(req.url).pathname;
  if (path=='/'){data=fs.createReadStream(__dirname +'/index.html','utf8');}
  if(path=='/index'){data=fs.readFileSync('./index.html','utf8');res.write(data);}
  if(path=='/login'){data=fs.readFileSync('./login.html','utf8');res.write(data);}
  res.end();
}
