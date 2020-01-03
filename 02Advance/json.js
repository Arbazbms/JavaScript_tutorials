//alert('hii')
const student = {
  name: "john",
  id: 123,
  section: "A"
};
console.log(typeof student); // object

// convert this object to String and store it in LocalStorage as it accepts String as the parameter
const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString); // String
//localStorage.setItem('student', studentObjToString);

const toJSONstudent = JSON.parse(studentObjToString)
console.log(typeof toJSONstudent);// object

