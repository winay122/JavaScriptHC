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

