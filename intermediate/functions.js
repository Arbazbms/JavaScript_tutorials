//function1
const sayHello = function (name) {
    console.log("Greeting message for user")
    console.log(`hello ${name}`);
    
}
sayHello("John")

//function2
const fullNameMaker = function(firstname,lastname){
    console.log(`welcome ${firstname} ${lastname}`);
    
}
fullNameMaker("john" , "Doe")

//function3 return saves the memory 
let numberAdder = function (num1,num2) {
    let sum = num1 + num2
    return sum
}
let result = numberAdder(10.8,60)
console.log(result);

// default parameters in functions importanat
let guestUser = function (_deName = 'unName', courseCount = 0){//im getting an error in name = "uname" if mentioned in 1st param of this function
    return 'hello' + _deName + 'your course count is' + courseCount
}
console.log(guestUser('john', 55))
