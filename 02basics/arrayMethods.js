// *** big doubt here though we have declared numbers array as const we are still able to modify
//the value y so ?
// the changes made to the array using Array methods are not making changes in previuos arrays 
// they remain same ?


const numbers = ['one','two','three','four','five','six']//doubt here *** const declared but yet changing
console.log(numbers);

numbers[1] = 'changedval'// use to change any values
console.log(numbers)

// there are 3 ways in which we can modify array
//START
numbers.shift()
console.log(numbers)// removes first element of the array

numbers.unshift("newVAl")
console.log(numbers);

//End
numbers.pop()
console.log(numbers); //removes last Element

numbers.push("pushedVAl")
console.log(numbers);


//middle
numbers.splice(2,1,"sliceVAL")
console.log(numbers);




