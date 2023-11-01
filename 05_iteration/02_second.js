let index = 0;
while (index < 5) {
    console.log(`value is ${index}`);
    index++;
}

console.log("\n");

let subject = ['Maths','Physics','Chemistry','Biology']

let idx = 0
while (idx < subject.length) {
    console.log(`${subject[idx]} book`);
    idx++;
}

console.log('\n');

let chance = 1

do {
    console.log(`you got chance ${chance}`);
    chance++;
} while (chance < 5);