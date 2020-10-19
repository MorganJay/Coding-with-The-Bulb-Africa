//constructor function
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("James", "Morgan", "12-1-2024");

//Ternary operator
const x = 3;
const color = x > 10 ? 'red' : 'blue';

const form = document.querySelector("#userform");
const usernameInput = document.querySelector("#username");
const usersList = document.querySelector("#users");
const submit = document.querySelector("#button");
const passwordInput = document.querySelector("#password");
// usernameInput.classList.add("invalid");
// passwordInput.classList.add("invalid");

function clearInputs() {
  usernameInput.value = "";
  passwordInput.value = "";
}

function onSubmit(e) {
  e.preventDefault();
  if (usernameInput.value === "") {
    alert("Username cannot be empty");
    //setTimeout(() => message.remove(), 3000);
  } else if (passwordInput.value === "") {
    alert("Please enter a password");
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${usernameInput.value} || ${passwordInput.value}`
      ));
    usersList.appendChild(li);
  }
  clearInputs();
}

form.addEventListener("submit", onSubmit);
