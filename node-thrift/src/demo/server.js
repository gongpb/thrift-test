var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

global.users  = {};
var worker = require('./worker');

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
     worker.startWorker();
}


