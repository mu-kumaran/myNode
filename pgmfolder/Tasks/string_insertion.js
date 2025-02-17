var varName = new Buffer.alloc(50);
var len = varName.write("Manoj Karur");

//string insertion position
var insPosi = 5;  

//name of the string to be inserted
var insString = "Hello world"; 

var lent = insString.length

for(i=insPosi;i<len;i++){
    varName.write(varName.toString()[i],i+lent)
}
 varName.write(insString,insPosi);

 //output
 console.log(varName.toString())
 