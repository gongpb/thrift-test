/**
 * New node file
 */
var fs = require("fs");
var rs = fs.createReadStream('data.txt', {bufferSize:11});

var data = "";
rs.on("data", function (chunk){
	data += chunk;
	console.log("======="+chunk);
});

rs.on("end", function (){
	//console.log(data);
});


var b = new Buffer("你好","utf8");
console.log(b);


var buf1 = new Buffer(26);
var buf2 = new Buffer(26);

for (var i = 0 ; i < 26 ; i++) {
  buf1[i] = i + 97; // 97 is ASCII a
  buf2[i] = 33; // ASCII !
}
console.log(buf1.toString());
buf1.copy(buf2, 8, 0, 2);
console.log(buf2.toString('ascii', 0, 25));
