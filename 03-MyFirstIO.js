var fs = require("fs");
var file_location = process.argv[2];

function readFileIntoString(path){
  var buf = fs.readFileSync(path);
  return buf.toString();
}
var count = 0;
var fString = readFileIntoString(file_location);
var fArray  = fString.split("");
for (var i = 0; i < fArray.length; i++){
  if (fArray[i] == "\n") {count++;}
}
console.log(count);
