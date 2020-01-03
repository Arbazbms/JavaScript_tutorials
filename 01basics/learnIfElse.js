
// true shoud be true not TRUE and True
// if (false) {
//     console.log("iam inside if block")
// }
// else if (true) {
//     console.log("ima inside else if block")
// }
// else{
//     console.log("Iam inside else block")
// }
var whoIsUser="teacher"
if (whoIsUser === "user") {
    console.log("Greetings message for User");
    console.log("Allow acces to his courses"); 
}else if(whoIsUser === "teacher"){
    console.log("Greeting message for Teacher")
    console.log("Allow access to Courses");
}
else{
    console.log("please verify the email");
    console.log("you are not authorized for accessing the courses");
}