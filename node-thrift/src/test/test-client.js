/**
 * New node file
 */
var net = require('net');
var client = net.connect({port: 8125});

client.write('node net test world-测试!\r\n');

client.on('data', function(data) {
	  console.log(data.toString());
	  client.end();
});

client.on('end', function() {
	  console.log('client disconnected');
});
		