var fs=require("fs");
fs.readFile("myfile2.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
    });

console.log("program end")