//var and let keyword differeces example

let IAmGlobal = 'someValue'
if(true){
    let IamLocal = 'someMoreValue'
    var IamLocal2 = 'local2'
    IAmGlobal = 'superMan'
    console.log(IamLocal);
    console.log(IAmGlobal);
}
// console.log(IamLocal); cannot access local variables outside of block
console.log(IAmGlobal); // accesible and modifiable
console.log(IamLocal2); //the value declared within block should not be accessible outside the block
//but it is accessible when declared using VAR keyword
 



