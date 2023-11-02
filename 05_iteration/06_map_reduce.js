const language = ['java','JavaScript','cpp','python','ruby']

// const values = language.forEach( (lan) =>{
//     console.log(lan);
//     // return lan;
// })

// console.log(values)  // give undefine as foreach do not return value 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum = myNumbers.filter( (n)=> n>4)

// console.log(newNum);

// -----------using forEach

const newNumbers = []

myNumbers.forEach((n)=>{
    if(n>4){
        newNumbers.push(n)
    }
})
// console.log(newNumbers)

// ------------------ map  ----------

// const myNewNum = myNumbers.map( (num) => (num *10))

const myNewNum = myNumbers
    .map( (num) => (num*10))
    .map( (num) => num+1 )
    .filter( (num) => num>30)


// console.log(myNewNum);

// ------ reduce ------------

const price = [ 10, 15, 20, 30, 50]

const myTotal = price.reduce( (acc, currValue) => {
    // console.log(`acc = ${acc} and currValue = ${currValue}`)
    return acc  + currValue
}, 0)

// console.log(myTotal);

const courseDetails=[
    {
        coureseName: 'C++',
        price: 999
    },
    {
        coureseName: 'web development',
        price: 9999
    },
    {
        coureseName: 'Machine Learning',
        price: 8999
    },
    {
        coureseName: 'DSA',
        price: 3999
    },
]

const priceOfAllCourses = courseDetails.reduce( (acc, cost)=>{
    return acc = acc + cost.price
},0)

console.log(priceOfAllCourses);