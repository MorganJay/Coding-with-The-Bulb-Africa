// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
//   this.greetUser = function () {
//     return `Hello!, nice to meet you ${this.firstName} ${this.lastName}`;
//   };
// }

class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  greetUser() {
    return `Hello!, nice to meet you ${this._firstName} ${this._lastName}`;
  }
}

const john = new User("John", "Doe");
//console.log(John.getFullName());

class Member extends User {
  constructor(firstName, lastName, membershipType) {
    super(firstName, lastName);
    this._membershipType = membershipType;
  }
  register() {
    return `${this._firstName} ${this._lastName} is now a ${this._membershipType} member of ES6.`;
  }

  static countMembers() {
    return `We have 50 users alive and 0 dead.`;
  }
}

const mary = new Member("Mary", "Johnson", "Platinum");
console.log(mary.register());
console.log(Member.countMembers());
const james = new Member("James", "Morgan", "Diamond").register();
console.log(james);
console.log(james.big());

const log = "hi";
const events = {
  click: log,
  mouseup: log,
};

for (const type in events) {
  // let fn = events[type];
  // addEventListener(type, function (e) {
  //   fn(e);
  // });
}
