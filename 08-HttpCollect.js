var http = require("http");

http.get(process.argv[2], function (response) {
  var dataStreams = Array();
  response.on("data", function (data){ dataStreams.push(data) })
  response.on("end", function (a,b,c,d){  // idk what the on("end") gives so lol that should be enough args
    var finalOut = String();
    for (var i = 0; i < dataStreams.length; i++) finalOut = finalOut + dataStreams[i].toString();
    console.log(finalOut.length);
    console.log(finalOut);
  })
})
