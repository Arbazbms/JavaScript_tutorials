// Program that shows the delay in execution
//The first code is executed asynchronously
//(the second function; sayName() does not wait for the first function; greet() to complete).
//

//-----------------------------------------first code--------------------------------------
function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');


//Example: Using a Callback Function
//In the above example, the second function does not wait for the first function to be complete. 
//However, if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function. For example,


//---------------------------------------second code---------------------------------
// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);