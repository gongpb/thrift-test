var thrift = require('thrift');
var userService = require('./UserService.js'),
    ttypes = require('./user_types');

var transport = thrift.TFramedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection('localhost', 9090,{transport:transport}),
    client = thrift.createClient(userService, connection);

connection.on("connect", function(){
	console.log("client is connectted");
})
connection.on('error', function(err) {
  console.error(err);
});
connection.on('close', function(err) {
  console.log("client is close");
});

var user = new ttypes.User({uid: 1,name: "nodejs-thrift",age: 25,"desc":"node测试-thrift探究"});
//--------------调用 thrift接口方法----------------
client.add(user, function(err, response) {
	console.log("response-1:", response);
});
client.add(user, function(err, response) {
	console.log("response-2:", response);
});
client.add(user, function(err, response) {
	console.log("response-3:", response);
});

//client.get(1, function(err,responseUser) {
//    if (err) {
//      console.error(err);
//    } else {
//      console.log("retrieved:", responseUser.name);
//      connection.end();
//    }
//});
