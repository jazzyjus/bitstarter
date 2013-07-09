var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var str = fs.readFileSync('index.html');
  var buffer = new Buffer(str, "utf-8")
  response.send(buffer.toString('utf-8');
});

app.get('/2', function(request, response) {
  response.send('lalaland');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
