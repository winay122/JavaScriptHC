// singleton
// Object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Vinay",
    [mySym]: "myKey1",
    age: 21,
    location: "Jaipur",
    email: "vinay@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Wednesday","Saturday"],
}

console.log(JsUser.email);
// console.log(JsUser.[email]); //wrong
console.log(JsUser["email"]);     
console.log(JsUser.name);
console.log(JsUser[mySym]);

JsUser.email = "vinay@hotmail.com";
// Object.freeze(JsUser);               
JsUser.email = "vinay@outlook.com";

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}


console.log(JsUser.greeting());