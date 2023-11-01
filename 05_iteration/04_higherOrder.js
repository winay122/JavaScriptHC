// for in loop

const myObject = {
    cpp: 'c++',
    js: 'JavaScript',
    py: 'Python',
}

for (const key in myObject) {
    // console.log(`Short cut for ${myObject[key]} is ${key}`);
}

console.log('\n');

const language = ['Js', 'cpp', 'c', 'Python']

for(const key in language){
    console.log(`${key} and ${language[key]}`);
}