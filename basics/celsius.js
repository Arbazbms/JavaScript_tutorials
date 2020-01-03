var score = 100
score = 130
const bonus = 50
var finalScore = (score + bonus) * 1.8
console.log(finalScore);
var complex  = ((4 + 4) * 5) / 2 // donot write 4 + 4 * 5 /2
let complex2 = 4 + 4 * 5 /2
console.log(complex);
console.log("wrong output"+ " " + complex2);//wrong result

// actual farenheitToClesius c = 0 for f = 32 and c= 37.77.. for f = 100
let tempInFarenheit = 100
// do calculations
// (f - 32) * 5 / 9
let celsius = (tempInFarenheit - 32) * 5 / 9 
console.log(celsius)