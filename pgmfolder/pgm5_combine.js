var http = require("http")
var fs=require("fs");
http.createServer((req,res)=>{
    res.writeHeader(200,{"Content-Type":"text/html"})    // to make html tags work
    fs.readFile("myfile.html",(err,data)=>{
        var output = data.toString();
        console.log(output)
        res.write("Hello<br><font color='red'>" + output +"</font>");
        res.end()
    });
}).listen(1234)
console.log("port listening at 1234......")