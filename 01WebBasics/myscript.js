const myElements = document.querySelector(".p1");
myElements.textContent = "new text"; // for only 1 txt which appears first
//console.log(myElements[0]);

const allElements = document.querySelectorAll("p"); // in form of array
allElements.forEach(p => {
  p.textContent = "iam new text just changed"; // for all elements
  //p.remove(); to remove all elements in html based on the querySelector in javaScript:)
  // a lot more in javaScript
  // refer mozilla document methods mdn  :)
});

// adding a new para in html || this wont change by above as it comes down to that .. it follow top to bottom approach
const myNewPara = document.createElement("p");
myNewPara.textContent = "i have created through createElement in JS";
document.querySelector("body").appendChild(myNewPara);

// event listener
document.querySelector("button").addEventListener("click", event => {
  event.target.textContent = "i was clicked";
});

// track the input
document.querySelector("#txtbx1").addEventListener("input", event => {
  console.log(event.target.value);
  console.log("sdfdfs");
});
