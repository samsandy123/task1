test=require('./fun');
var time=0;
timeinterval=setInterval(function()
{
  time+=2;
  console.log(time+" seconds has passed");
  if(time>10)
  {
    clearInterval(timeinterval);
  }
},2000)
console.log(__dirname);
console.log(__filename);
test()
