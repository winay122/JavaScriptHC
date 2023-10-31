function addTwoNumber(num1, num2){
    return num1 + num2;
}

const result = addTwoNumber(2,3)

console.log(result);

function loginUserMessage(userName){
    if(!undefined){
        console.log("Please enter user Name");
        return;
    }
    else
        return(`${userName} you just loggedIn`);
}

// console.log(loginUserMessage("Vinay"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function itemList(item1,item2,...items){
    let arr = [item1,...items];

    return arr;
}

// console.log(itemList('mobile','laptop','headphone','charger','book'));

const item = {
    itemName: "MotoG 5s Plus",
    Brand: "Motorola",
    price: 16999,
}

function handelObject(){
    console.log(`Price of ${item.itemName} is ₹ ${item.price}`);
}

// handelObject();

const myFriends = ['Rk','HV','Gulla','Ashvini','Satu','Vinay'];

function handelArray(arr){
    return arr[2];
}

// console.log(handelArray(myFriends));