const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

days.forEach(day => {
  console.log(day);
});

//Other Way

days.forEach(function(day, index) {
  console.log(`starts with ${index} -- ${day}`);
});
