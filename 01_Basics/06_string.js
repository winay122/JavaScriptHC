const name = "Vinay Kumar"
const regNo = 20144

console.log("Your name is " + name + " and regNo is " + regNo);   //using string concatination
// use srring intrapolation instead of concatination
console.log(`Your name is ${name} and regNo. is ${regNo}`);

const channelName = new String('ViRa');

console.log(channelName[0]);
console.log(channelName.__proto__);
console.log(channelName.length);
console.log(channelName.toUpperCase());
console.log(channelName.charAt(2));
console.log(channelName.indexOf("R"));


const newChannelName = channelName.substring(0,2)
console.log(newChannelName);

// const sliceSrting = channelName.slice(-4,3);
const sliceSrting = channelName.slice(1,3);
console.log(sliceSrting);

const myName = "    Vinay   ";
console.log(myName.trim());

const url = "https://vinaykumar.com%profile%bioData";
console.log(url.replaceAll('%',"/"));

const myFullName = "Vinay Kumar Yadav";
console.log(myFullName.split(" "));