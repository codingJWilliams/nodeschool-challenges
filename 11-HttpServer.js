var http = require("http");
var fs = require("fs");
var map = require('through2-map')

http.createServer(function (request, res){
  var body = Array();
  request.on('data', function (chunk) {
    body.push(chunk);
  }).on('end', function () {
    body = Buffer.concat(body).toString();
    var bodyArray = Array(body);
    var outArray = Array();
    for (var i = 0; i < bodyArray.length; i++){
      outArray.push(bodyArray[i].toUpperCase())
    }
    res.end(outArray.toString())
  });
}).listen(Number(process.argv[2]))
