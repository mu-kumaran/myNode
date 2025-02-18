var fs = require("fs")
var writeStream = fs.createWriteStream("newfile.txt")
var yourData = "Hi I am Manoj Kumar from Karur"
writeStream.write(yourData,'utf-8')
writeStream.end()  //must important

writeStream.on("finish",()=>{
    console.log("successfully inserted")
})

writeStream.on("error",(err)=>{
    console.log("Error:",err.stack)
})

console.log("program end")