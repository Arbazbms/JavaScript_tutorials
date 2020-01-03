class user {
  constructor(firstName, lastName, credit) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.credit = credit;
  }
  getFullName() {
    let fullName = `${this.firstName} ${this.lastName} is my fullName`;
    return fullName;
  }
  editFullName(newName) {
    const myName = newName.split(" ");
    this.firstName = myName[0];
    this.lastName = myName[1];
  }
}
class teacher extends user {
  constructor(firstName, lastName, credit, subject) {
    super(firstName, lastName, credit);
    this.subject = subject;
  }
  getFullName() {
    let fullName = `${this.firstName} ${
      this.lastName
    } is my fullName and I taech ${this.subject}`;
    return fullName;
  }
}
const john = new teacher("john", "Anderson", 30);
console.log(john);
console.log(john.getFullName());
john.editFullName("Arbaz Ahmed");
console.log(john.getFullName());
// const sammy = new user();
// console.log(sammy);// undefined as no parameter is passed
