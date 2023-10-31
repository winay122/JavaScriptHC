const arr = [1, 2, 3, 4, 5];
const friends = ['Vinay', 'Radhika', "Khushi", 'RaviKaran','HV']

const myArr = new Array(11, 12, 13, 14);

// console.log(arr[3]);
// console.log(friends);
// console.log(myArr[3]);

// Array methods

// arr.push(6);
// arr.push(7);
// arr.pop()

// arr.unshift(10)
// arr.shift()

// console.log(arr.includes(11))
// console.log(arr.indexOf(4))

const newArr = arr.join()  // join() adds all elements of an array into string.

// console.log(newArr);  
// console.log(typeof(newArr));  // typeOf newArr -> string

// console.log(arr);
// console.log(typeof(arr));  //typeof -> object

// slice() , splice()

const myn1 = arr.slice(1,3)
const myn2 = arr.splice(1,3)

console.log(myn1);
console.log(myn2);