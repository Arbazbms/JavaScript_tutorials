// const myTodos = ["Buy Bread", "Go to Gym", "Record youtube videos"];
// console.log(myTodos.indexOf("Buy Bread"));

// Array of Objects
const newTodos = [
  {
    title: "Buy Bread",
    isDone: false
  },
  {
    title: "Go to Gym",
    isDone: false
  },
  {
    title: "Record youtube Videos"
  }
];
// method 1 to find array of objects
// const index = newTodos.findIndex(function(todo, index) {
//   console.log(todo);

//   return todo.title === "Go to Gym";
// });
// console.log(index);

// method 2
// let findTodo = function (myTodos,title) {
//     const index = myTodos.findIndex(function (todo,index) {
//         return todo.title.toLowerCase() === title.toLowerCase()

//     })
//     return myTodos[index]

// }
// let printMe = findTodo(newTodos,'Go TO GYm')
// console.log(printMe);

// method 3
let FindTodo = function(myTodos, title) {
  //   console.log(myTodos);this loops through all arrays

  // passing array and userTitle to search
  const TitleReturned = myTodos.find(function(todo, index) {
    // console.log(todo);// this loops through till searched element and stop
    console.log(index); // this loops through till searched element and stop and prints 0 1 of objects

    return todo.title.toLowerCase() === title.toLowerCase();
  });
  return TitleReturned;
};
let print = FindTodo(newTodos, "Go TO GYm");
console.log(print); // this method is easy :)
