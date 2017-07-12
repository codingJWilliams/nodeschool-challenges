var net = require("net");
var moment = require("moment");

net.createServer(function (socket){
  socket.end(moment().format("YYYY-MM-DD HH:mm") + "\n");
}).listen(Number(process.argv[2]))
