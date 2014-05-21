var thrift = require('thrift');
var userService = require('./UserService.js'),
    ttypes = require('./user_types');

var	transport = thrift.TFramedTransport;
	
// var users = {};

servicesMethods = {
    add : function(user, success) {
		console.log("-----------call  add---------");
        if (!users[user.uid]) {
            console.log("stored:", user.uid);
            users[user.uid] = user;
            success(null, "ok");
        } else {
            success(null, "error , 该用户已经存在");
        }
    },
    addStr: function(user, success) {
        success(null, "ok");
    },
    get : function(uid, success) {
        console.log("retrieved:", uid);
        if (users[uid]) {
            success(null, users[uid]);
        } else {
            success(null, new ttypes.User());
        }
    },
    hello1: function(success) {
		console.log("111111111111111111")
        success(null, "OK-------");
    }
}

var startWorker = exports.startWorker = function (){
        
    var server = thrift.createServer(userService, servicesMethods,{transport:transport});

    server.listen(9090);
    server.on("connect", function(error){
        console.log("client is connected");
    });
    server.on("error",function(){
        console.error("client contect is error");
    });

}
