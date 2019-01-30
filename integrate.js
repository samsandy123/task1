r express=require('express')
var app=express();
var bodyparser=require('body-parser');//to grab elements in front end and also from url
var mongoose=require('mongoose')
var port=8090;
//var Book=require('./bookmodel');
mongoose.connect("mongodb://localhost:27017/dad1", { useNewUrlParser: true });
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
//var Tank = mongoose.model('Tank', schema);
var Tank = mongoose.model('Tank', schema);
var small = new Tank({ size: 'small' });
small.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
Tank.findOne(function(error, result) { /* ... */
  console.log(result);
 });
app.listen(port,function(){
  console.log("server is running");
});
