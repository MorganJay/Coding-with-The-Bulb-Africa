import User, { greetUser } from "./user.js";
// as keyword to create an alias
const john = new User("John", "Doe");
console.log(john.getFullName());
console.log(greetUser(john.getFullName()));
