const language = ['cpp', 'Python', 'JavaScript', 'Ruby', 'c']

// language.forEach( function(val){
//     console.log(val);
// })

// language.forEach( (val)=> console.log(val) )

// function printMe(val){
//     console.log(val);
// }

// language.forEach(printMe)

// language.forEach( (value , index, arr) => {
//     console.log(value, index, arr);
//     // console.log(`${value} is at ${index} index in array ${arr}`)
// })

const myLanguage = [
    {
        languageName: 'javaScript',
        fileName:'js'
    },
    {
        languageName: 'C++',
        fileName:'cpp'
    },
    {
        languageName: 'python',
        fileName:'py'
    }
]

myLanguage.forEach( (val)=> {
    console.log(val.languageName);
})

