const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathOgj{
    constructor(){
        console.log("object created");
        
    }
}
//ES6 module
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathOgj = SomeMathOgj; other method down

module.exports = {sum : sum, PI : PI, SomeMathOgj : SomeMathOgj}