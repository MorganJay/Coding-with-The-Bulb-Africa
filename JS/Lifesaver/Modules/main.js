import { User, greetUser } from "./user.js";
// import * as Users from './user.js';
// import User, {greetUser} from './user.js';
// as keyword to create an alias

const john = new User("John", "Doe");
// const john = new Users.User("John", "Doe");
console.log(john.getFullName());
console.log(greetUser(john.getFullName()));
// console.log(Users.greetUser(john.getFullName()));
