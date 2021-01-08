class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = () => {
      return `${this.firstName} ${this.lastName}`;
    };
  }
}

//export
const greetUser = (userFullName) => {
  return `Hello!, nice to meet you ${userFullName}`;
};

export { User, greetUser };
// export default User;
