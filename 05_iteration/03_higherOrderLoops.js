// for of loop

const numbers = [1, 4, 6, 7, 2, 9, 3]

// for (const num of numbers) {
//     console.log(num);
// }

console.log('\n');

// const myName = "Vinay"
// for (const n of myName) {
//     console.log(n);
// }

const myDetails = new Map()

myDetails.set('Name','Vinay Kumar')
myDetails.set('Roll',20144)
myDetails.set('branch','CSE')

// console.log(myDetails);

for (const [key,value] of myDetails) {
    console.log(key,value);
}

const myObj = {
    userName: 'Vinay Kumar',
    RegNo: 20144,
    email: 'vinay@email'
}

// for (const [key , val] of myObj) {
//     console.log(key,': ', val);
// }

// can't itrate an object by for of loop

