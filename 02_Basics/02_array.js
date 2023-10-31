const marvel_heros = ['Ironman','CaptainAmerica', 'Spiderman']
const DC_heros = ["Superman","Batman","flash"]


// marvel_heros.push(DC_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(DC_heros)
// console.log(all_heros);

const all_super_heros = [...marvel_heros, ...DC_heros];
console.log(all_super_heros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnoterArr = anotherArr.flat(Infinity);    // at infinity depth
const realAnoterArr1 = anotherArr.flat(1);          // at deph 1

console.log(realAnoterArr);
console.log(realAnoterArr1);

console.log(Array.isArray("Vinay"));
console.log(Array.from("Vinay Kumar"));
console.log(Array.from({name: "Vinay", gender: "male"}));  //give you empty array as it is not definde to make array of key or value.

let subj1 = "Science";
let subj2 = "Maths";
let subj3 = "Biology";

console.log(Array.of(subj1, subj2, subj3));