// singleton

//object literals

const JsUser = {
    name : "Hitesh",
    age : 18,
    location : "jaipur",
    email:"harsh@goole.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "saturday"]
}

//console.log(JsUser.email);
JsUser.email = "harsh@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "harsh@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
