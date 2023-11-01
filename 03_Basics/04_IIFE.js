// immediate invoked function expression

(function chai(){
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`Hi, ${name} DB2 is Connected`);
})('Vinay');