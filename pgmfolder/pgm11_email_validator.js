var ev = require("email-validator")
var email ="mu.kumaran1991@gmail.com"
if(ev.validate(email))
{
    console.log("valid email")
}
else{
    console.log("invalid email")
}