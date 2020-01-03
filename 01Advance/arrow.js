// Old method of using functions

// const sayHello = function (name) {
//     return "hello " + name + " !"

// }
// console.log(sayHello("Einstein"));
// arrow functions
const sayHello = name => `hello ${name} !`

console.log(sayHello("Einstein"))
// simple todo to illustrate arrow functions
const todos = [{
    title: 'go to gym',
    isDone: true,
},{
    title:'study',
    isDone: true,
},{
    title:'have coffe',
    isDone:false,
}]
console.table(todos)
const thingsDone = todos.filter((todo) =>  todo.isDone === true)

console.log(thingsDone);
