/**
 * New node file
 */
var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on("data",function(data){
	  console.log(data.toString());
	  console.log(1111);
	  c.write("thrift--");
  });
  c.on('end', function() {
    console.log('server disconnected');
  });
  // c.write('hello\r\n');
  // c.pipe(c);

});

server.on('error', function (e) {
	 if (e.code == 'EADDRINUSE') {
	    console.log('Address in use, retrying...');
	    setTimeout(function () {
	      server.close();
	      server.listen(8125);
	    }, 8125);
	  }
});

server.listen(8125, function() { //'listening' listener
  console.log('server is running...');
});

