//Kings Problems
let king = "PM";

if (true) {
  let king = "cm";

  if (true) {
    let king = "MLA";
    console.log(king); // it ALWAYS SEARCHES FOR VARIABLE ABOVE AND PRINT IT
  }
}
if (true) {
  console.log("iam a global king" + " " + king);
}
