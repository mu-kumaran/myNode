var buf = new Buffer.alloc(50)
var len;
console.log("total chars:"+len)
console.log("output:"+buf)

len = buf.write("gowthaman karur")
console.log("total chars:"+len)
console.log("output:"+buf)

for(k of buf.toString())
{
    console.log(k+" ")
}

buf.write("manoj",10)

for(k of buf.toString())
    {
        console.log(k+" ")
    }