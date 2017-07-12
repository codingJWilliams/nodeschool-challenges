var fs = require("fs");
var path = require("path");
var dirPath = process.argv[2];
var filterBy = process.argv[3];
var results = Array();
fs.readdir(dirPath, function (error, list){
  for (var i = 0; i < list.length; i++){
    if(path.extname(list[i]).slice(1) == filterBy) results.push(list[i]);
  }
  for (var i = 0; i < results.length; i++){
    console.log(results[i]);
  }
})
