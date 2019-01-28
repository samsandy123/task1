//asynchronous is faster than synchronous synchronous delays remaining execution until its is done
var fs=require('fs');
var data=fs.readFileSync('import.js','utf8');//first parameter-filename second parameter-format
console.log(data);
fs.writeFileSync('write.txt',data);
fs.readFile('write.txt','utf8',function(err,data){//first parameter-error if in case fails and second is data read it is asynchronous code
  console.log(data);
});
fs.writeFile('write1.txt',data,function(err){
  if(err)
  console.log(err);
});
// //fs.unlink('write.txt',function(err)
// {
//   console.log(err);
// }); //to delete a file
