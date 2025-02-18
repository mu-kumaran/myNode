var fs = require("fs")
var ans=""
var readStream=fs.createReadStream("myfile.txt")
readStream.setEncoding("utf8")

//available to read data
readStream.on('data',function(chunk){
    ans = ans + chunk
});

//no more data to read
readStream.on('end',function(){
    console.log("File data: "+ans)
});

//error: path mistake
readStream.on('err',function(err){
    console.log("error:"+err.stack)
});