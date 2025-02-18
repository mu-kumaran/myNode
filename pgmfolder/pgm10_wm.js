var http = require("http")
var fs = require("fs")
var url = require("url")
http.createServer((req,res)=>{
    var path = url.parse(req.url).pathname  //.path //.href
    console.log(path)
    path = path.substring(1)
    console.log(path)
    fs.readFile(path,(err,data)=>{
        //if (err) throw err
        res.writeHeader(200,{"Content-Type":"text/html"})
        res.write(data)
        console.log(data.toString())
        res.end()  //it stops looping of browser
    })
}).listen(1234)
console.log("port listening at 1234")