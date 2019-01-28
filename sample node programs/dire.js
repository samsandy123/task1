var fs =require('fs');
//fs.mkdirSync("sam123");
//fs.rmdirSync("sam123");
fs.mkdir('stuff1',function()
{
  fs.readFile('write.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writedata.txt',data,function(err){
        console.log(err);
    });
  });
});
fs.rmdir('stuff1',function(){
  
});
