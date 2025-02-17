//starting the server
var http = require("http")
http.createServer((req,res)=>{
    res.write("<h1>Welcome to Node js </h1>")
    res.end()
}).listen(1234)
console.log("port listening at 1234......")

// ctrl + c to switch off the server