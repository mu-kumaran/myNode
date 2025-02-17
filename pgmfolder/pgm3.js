var fs=require("fs");
var data = fs.readFileSync("myfile.txt");
console.log(data.toString())
console.log("program end")