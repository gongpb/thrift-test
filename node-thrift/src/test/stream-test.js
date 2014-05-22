var util = require("util");
var events = require("events");

function MyStream () {
	events.EventEmitter.call(this);
}
//继承
util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.write = function(data){
	this.emit("data", data);
}

var stream = new MyStream();

stream.on("data", function(data){
	console.log("myStream data="+data);
});

stream.write("进阶喽--我对nodeJs又有新的理解了----");