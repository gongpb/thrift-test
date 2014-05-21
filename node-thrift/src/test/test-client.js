/**
 * New node file
 */
var net = require('net');
var client = net.createConnection(8125,'localhost');
client.setNoDelay(false);
// for(var i=0; i<100; i++){
	// client.write('node net test world-测试!');
// }
client.write('node net test world-测试!');
client.write('node net test world-测试!');
client.write('node net test world-测试!');

client.on('data', function(data) {
	  console.log(data.toString());
});

client.on('end', function() {
	  console.log('client disconnected');
});
		