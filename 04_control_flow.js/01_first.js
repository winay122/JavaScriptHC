
//  < , > , , <= , >= , == , === , != , !== , !

// if(2 == '2'){
//     console.log('true');
// }

// if(2 === '2'){
//     console.log("true")
// }
// else{
//     console.log('False')
// }


// let gamePoint = 200;

// if(gamePoint > 100){
//     let power = 'fly'
//     console.log(`You have power to ${power}`);
// }
// console.log(`You have power to ${power}`);  //cant access outside scope

const balance = 1000;

// if (balance > 500) console.log("you can buy pass") , console.log('have enough pocket money');

let age = 18;


if(age > 0 && age < 18){
    console.log("You cant Drive");
}
else if(age >= 18 && age < 55){
    console.log('You can drive');
}else if(age >= 55 && age >0){
    console.log('It is not recommended to drive for safty reason');
}else{
    console.log('Invalid age');
}