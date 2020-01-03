const myTodos = []

myTodos.push('prepare for dcet')
myTodos.push('namaaz')
myTodos.push('gym')

myTodos.forEach(function (todo, index) {
    console.log(`your task no . ${index + 1} is: ${todo}`); 
}) 