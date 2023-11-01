// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Table of ${i}\n`);
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
//     console.log('\n');
// }


// const superHeros = ['Spiderman', 'Batman', 'Ironman', 'Thor']

// for (let index = 0; index < superHeros.length; index++) {
//     const element = superHeros[index];
//     console.log(element);
// }

// ---------- break and continue ----------

for(i = 1; i <=10; i++){
    if(i==5){
        console.log('5 is detected');
        break;
    }
    console.log(`value is ${i}`);
}

console.log();

// ------- continue ----------

for(i = 1; i <= 10; i++){
    if(i >= 4 && i  <= 6){
        continue;
    }
    console.log(`value id ${i}`);
}