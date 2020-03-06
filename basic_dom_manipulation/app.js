const txt = document.querySelector(".title");
const namelist = document.querySelector(".name-list"); //
const bt = document.querySelector(".bt");
const add = document.querySelector(".add"); //
const listInput = document.querySelector(".input-list"); //

//BC
const cbc = document.querySelector(".bbb");
const b = document.querySelector(".b");
cbc.addEventListener("click", () => {
  b.style.backgroundColor = "green";
});

add.addEventListener("click", function() {
  const newLI = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);

  newLI.appendChild(liContent);
  namelist.appendChild(newLI);
  console.log();
});

bt.addEventListener("click", () => {
  txt.style.backgroundColor = "red";
  // txt.classList.toggle("change"); // adds css instead of " add " use toggle
});
