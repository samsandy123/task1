var events = require('events');
var myEmitter=new events.EventEmitter();
myEmitter.on('somewhat',function(mssg){
  console.log(mssg);
});
myEmitter.emit('somewhat','the event was emitted');
