var http = require("http");

function getUrl(url, callback){
  http.get(url, function (response) {
    var dataStreams = Array();
    response.on("data", function (data){ dataStreams.push(data) })
    response.on("end", function (a,b,c,d){  // idk what the on("end") gives so lol that should be enough args
      var finalOut = String();
      for (var i = 0; i < dataStreams.length; i++) finalOut = finalOut + dataStreams[i].toString();
      callback(finalOut)
    })
  })
}
getUrl(process.argv[2], function (retString){
  console.log(retString);
  getUrl(process.argv[3], function (retString) {
    console.log(retString);
    getUrl(process.argv[4], function(retString){
      console.log(retString)
    })
  })
})
