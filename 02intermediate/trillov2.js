let myTodos = {
    days: 'Monday',
    meetings: 0,
    meetDone: 0,
}
let addMeetings = function (meet = 0) {
  
   
    
   myTodos.meetings = myTodos.meetings + meet

    
}
let meetDone = function (todo,meet = 0) {
    
    todo.meetDone = todo.meetDone - meet
    
}
let resetDays = function (todo) {
    todo.meetings = 0;
    todo.meetDone = 0;
}
let getSummaryOfDay = function (todo) {
    let meetLeft = todo.meetings + todo.meetDone// meetings = 10 meetdone = -6 meetleft = 10 +- 6
    return  `You have ${meetLeft} meetings left`
}
addMeetings(50)
addMeetings(5)
 meetDone(myTodos,50)
 console.log(getSummaryOfDay(myTodos));

