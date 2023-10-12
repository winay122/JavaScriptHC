let score = "234asd"

console.log(typeof(score)); //string

let valInNumber = Number(score)

console.log(typeof valInNumber); //number
console.log(typeof(NaN));   // number

console.log(valInNumber)  //NaN as it is not a pure number

// "33" => 33
// "33asd" => NaN
// typeof(NaN) => number 
// true => 1 , false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);         //true
console.log(typeof isLoggedIn);         //nummber
console.log(typeof booleanIsLoggedIn);  //boolean

// 1 => true, 0 => false
// "" => false
// "Vinay" => true

let num = 123;

let stringNumber = String(num)

console.log(stringNumber);          //123
console.log(typeof stringNumber);  //string