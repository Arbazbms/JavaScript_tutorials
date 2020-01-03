let userName = "LCO1234";
let password = "abcdr1234";
// console.log(userName);

// console.log(userName.length);
// console.log(userName.trim());

let emailChecker = function(myString) {
  if (myString.includes(123) && myString.length > 6) {
    return true;
  } else {
    return false;
  }
};

let passwordChecker = function(pass) {
  if (pass.includes(1234) && pass.length > 8) {
    return true;
  } else {
    return false;
  }
};
console.log(emailChecker(userName));
console.log(passwordChecker(password));
