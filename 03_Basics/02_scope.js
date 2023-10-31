
function one(){
    const userName = "Vinay"
    
    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);   //can not access 

    two()
}
// one()


if(true){
    const name = 'Vinay';
    if(name === "Vinay"){
        const lastName = 'Kumar'
        console.log(name + " " +lastName);
    }
}


// -------------------- Intersting --------------------------

console.log(addOne(4));     //can access it from anywhere
// console.log(addTwo(3));     // as it is function Expression it can only access after declearation (as it is stored in variable)

function addOne(num){
    return(num + 1)
}

const addTwo = function(num){
    return(num+2)
}