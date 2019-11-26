var util = require("util");
var events = require('events');

function MyStream(){
    events.EventEmitter.call(this);
}
util.inherits(MyStream,evnet.EventEmitter); 