const myDate = new Date()
const date = Date()

console.log(typeof myDate); //object
console.log(typeof date);   //string

console.log(date);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

// to create own date

let myCreatedDate = new Date(2023, 0, 12)       // yy, mm, dd
// let myCreatedDate = new Date("1-14-2022")    // mm-dd-yy
// let myCreatedDate = new Date("1/15/2012")    // mm/dd/yy

console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleTimeString());


// time span

let myTimeSpan = Date.now()

console.log(myTimeSpan);  // in mili seconds
console.log(Math.floor(myTimeSpan/1000));  //in seconds


console.log("--------------------------");

let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());