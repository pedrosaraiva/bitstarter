var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger()), index;;

app.get('/', function(request, response) {
 response.send(index.toString());
});


function readIndex(callback) {
  fs.readFile("./index.html", function (err, content) {
	if (err) return callback(err);
	callback(content);
    });
}

readIndex( function (content) {
    index = new Buffer(content,'utf-8');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
