var http = require('http');
var app = require("./config/express")();
var server = http.createServer(app);

server.listen(process.env.PORT || 4000, function onListen() {
  var address = server.address();
  console.log('Listening on: %j', address);
  console.log(' -> that probably means: http://localhost:%d', address.port);
});
