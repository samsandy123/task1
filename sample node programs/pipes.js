var fs=require('fs');
var red=fs.createReadStream(__dirname + '/dire.js','utf8');//readstream extends Event
var writes=fs.createWriteStream('write123.txt');
red.pipe(writes);
