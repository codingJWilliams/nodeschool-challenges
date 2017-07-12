var fs = require("fs");
var path = require("path");
//var dirPath = process.argv[2];
//var filterBy = process.argv[3];
var results = Array();


module.exports = function(dirPath, filterBy, cback){
  fs.readdir(dirPath, function (error, list){
    if(error){
      return cback(error);
    }

    for (var i = 0; i < list.length; i++){
      if(path.extname(list[i]).slice(1) == filterBy) results.push(list[i]);
    }
    return cback(null, results);
  })
};
