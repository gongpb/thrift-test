var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

var thrift = require('thrift');
var UserStorage = require('./UserService.js'), 
	ttypes = require('./user_types');

var users = {};

process.on('uncaughtException', function(err){
	console.error('uncaughtException')
})
	
console.log("numCPUs="+numCPUs);
if (cluster.isMaster) {
    console.log('[master] ' + "start master...");

    for (var i = 0; i < numCPUs; i++) {
         cluster.fork();
    }
	cluster.on('death',  function(worker){
		console.error('[master] ' + 'death: worker' + worker.id + ',pid:' + worker.process.pid);
	    cluster.fork();
		}
	);
    cluster.on('listening', function (worker, address) {
        console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
    });

} else if (cluster.isWorker) {
	 console.log('[worker] ' + "start worker ..." + cluster.worker.id);
	var server = thrift.createServer(UserStorage, {
		add : function(user, success) {
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
				success(null, "OK-------");
		}
	});

	server.listen(9090);
	
	server.on("connect", function(error){
		console.log("client is connected");
	});
	server.on("error",function(){
		console.error("client contect is error");
	});
}


