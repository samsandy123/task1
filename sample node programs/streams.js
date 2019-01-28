var fs=require('fs');
var red=fs.createReadStream(__dirname + '/dire.js','utf8');//readstream extends Event
var writes=fs.createWriteStream('write12.txt');
var info;
red.on('data',function(data){
  console.log("data received is ");
  info=data;
  writes.write(info);
  console.log(data);
});
