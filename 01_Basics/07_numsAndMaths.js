const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log((balance/3).toFixed(3))
console.log(balance.toString().length);

const largeNum = 109380000;
console.log(largeNum.toLocaleString());
console.log(largeNum.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

//++++++++++++++++++++++  Maths  ++++++++++++++++++++++
console.log("++++++++++++  MATHS  ++++++++++++++++");

// console.log(Math);
// console.log(Math.abs(-87));
// console.log(Math.round(45.7));
// console.log(Math.floor(45.7));
// console.log(Math.ceil(45.7));
// console.log(Math.pow(4,3));
// console.log(Math.min(3,4,5,1,9,7))
// console.log(Math.max(3,4,5,1,9,7))

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

// random number in a range 
const min =10;
const max =20;

console.log(Math.floor(Math.random ()*(max-min)+1)+min)