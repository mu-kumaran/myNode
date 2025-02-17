var events=require("events")
var ee = new events.EventEmitter();

ee.on("manoj",()=>{
    console.log("Program end")
})

//step 3
const myfun = ()=>{
    console.log("events handled success")
    ee.emit("manoj")  //step 4
}
ee.on("studentevent",myfun)  //step2
ee.emit("studentevent")  //step1