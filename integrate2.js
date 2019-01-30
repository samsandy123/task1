var express=require('express')
var app=express();
var port=8099
app.listen(port,function(){
  console.log("server is running on "+port)
})
var mongoose=require('mongoose')
mongoose.connect("mongodb://localhost/data")
var db=mongoose.connection
db.on('error',function(err){
  console.log("error has occured");
})
db.once('open',function(){
  console.log("connected");
})
var sampleschema= new mongoose.Schema({name:String});
var samplemodel=mongoose.model('data',sampleschema);
var data1=new samplemodel({name:"vegeta"});
data1.save(function(error,data1){
  console.log(data1);
})
