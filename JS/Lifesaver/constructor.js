function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.greetUser = function () {
    return `Hello!, nice to meet you ${this.firstName} ${this.lastName}`;
  };
}

const John = new User("John", "Doe");
console.log(John.getFullName());
