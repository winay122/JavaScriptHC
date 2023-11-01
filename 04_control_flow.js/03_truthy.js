const userEmail = 'vinay@mail.com'

if(userEmail){
    console.log('Got user email')
}else{
    console.log("don't got user email");
}

//  false values
// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// truthy value
// "0", 'false' ," ", [] , {} , function(){}

// check array is empty

let arr = []
if(arr.length === 0){
    console.log('Array is empty');
}

//check object is empty

const obj = {}

if(Object.keys(obj).length === 0){
    console.log('Empty object');
}

// Nullish Coalescing Operator (??) : null or undefine
let val1 = 5 ?? 10;
console.log(val1);

let val2 = null ?? 10;
console.log(val2);

// Terniary Operator

let price = 56;

price < 100 ? console.log('I can buy') : console.log('I can not buy');;
