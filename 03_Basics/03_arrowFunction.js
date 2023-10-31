const itemDetails ={
    name: "iQOO Z3 plus",
    brand: "Vivo",
    Price: 18999,
    discription: function(){
        console.log(`Price of ${this.name} of ${this.brand} is ₹ ${this.Price}.`)   //this will refer to current context
    }
}

console.log(itemDetails.name);
itemDetails.discription()

itemDetails.brand = 'iQOO'
itemDetails.discription()

console.log(this)   //will give empty object {} as it is in node environment

function fun(){
    let userName = "Vinay Kumar"
    // console.log(this)   //will get many values 
    // console.log(this.userName);  //give undefine (cant use this here in function)
}

fun();

const arrow = () => {
    let userName = 'Vinay Yadav'
    console.log(this);    //give empty object {}
    console.log(this.userName);     // undefined
}

arrow();

console.log("------arrow function-------");

const addTwoNum = (num1, num2) => {
    return num1 + num2
}

const addTwoNum2 = (num1, num2) => num1 + num2

const addTwoNum3 = (num1, num2) => (
    num1+num2
)

console.log(addTwoNum(7,9))
console.log(addTwoNum2(6,8))
console.log(addTwoNum3(2,4))

const objectReturn = () => ({
    name: 'Vinay',
    roll: '20EJECS038',
    regNo: 20144,
    placed: false,
})

console.log(objectReturn());
