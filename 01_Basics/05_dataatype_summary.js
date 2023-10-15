//  PRIMITIVE

// 7 types: String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100; // Number
const value = 100.23  //Number

const isLoggedIn = false    //Boolean
const outsideTemp = null    //null
console.log(typeof outsideTemp)  //Object

let userEmail;

const id = Symbol('123')  //Symbol (ubique)
const anotherId = Symbol

console.log(id == anotherId)    //false because it 
const bigNumber = 98576568783775634875846n  //BigInt
console.log(typeof bigNumber)  //bigint

// Reference (non-prmitive)

//Array, Objects, Functions

const friends = ["Vinay","Radhika","Khushi"];

const myData = {
    name: "Vinay",
    roll: "20EJECS038",
    regNo: 20144,
    branch: "CSE"
}

const myFunction = function(){
    console.log("Hellow Vinay")
}
 
// **************************************
// Stack and Heap in JS
console.log("---------------------------------")

// Stack (Primitive), 

let myName = "Vinay Kumar"

let anotherName = myName
anotherName = "Vira"

console.log(myName);
console.log(anotherName);

// Heap (Non-Premitive)

let user1 ={
    email : "vinay@email.com",
    upi : "vinay@ybl"
}
let user2 = user1;

user2.email = "vira@email.com"

console.log(user1);
console.log(user2);