var thrift = require('thrift');
var userService = require('./UserService.js'),
    ttypes = require('./user_types');

transport = thrift.TBufferedTransport();
protocol = thrift.TBinaryProtocol();

var connection = thrift.createConnection('localhost', 9090, {
	  transport : transport,
	  protocol : protocol
	}),
    client = thrift.createClient(userService, connection);

var user = new ttypes.User({uid: 1,name: "nodejs-thrift",age: 25,"desc":"node测试-thrift深究"});
connection.on("connect", function(){
	console.log("connect callback");
})
connection.on('error', function(err) {
  console.error(err);
});

client.add(user, function(err, response) {
	console.log("stored:", response);
});

//client.get(1, function(err,responseUser) {
//    if (err) {
//      console.error(err);
//    } else {
//      console.log("retrieved:", responseUser.name);
//      connection.end();
//    }
//});
