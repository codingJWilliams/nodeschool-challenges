
var arguments = process.argv;
var inputs = arguments.slice(2);
var sum = 0;

for (var i = 0; i < inputs.length; i++){
  sum = sum + Number(inputs[i])
}

console.log(sum);
