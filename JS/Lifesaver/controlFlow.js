//Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!

//const time = new Date();
// const hour = time.getHours();

// if (hour >= 6 && hour < 12) console.log("Good morning!");
// else if (hour >= 12 && hour < 6) console.log("Good afternoon!");
// else console.log("Good evening!");

// //Switch
// let role;

// switch (role) {
//   case "guest":
//     console.log("Guest user");
//     break;

//   case "moderator":
//     console.log("Moderator user");
//     break;

//   default:
//     console.log("You are not a user. Unknown");
// }

//For loop
// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
// }

//While loop
// let i = 10;
// while (i >= 1) {
//     if (i % 2 !== 0) console.log(i);
//     i--;
// }

//Do while
// let i = 10;
// // do {
// //   if (i % 2 !== 0) console.log(i);
// //   i--;
// // } while (i >= 1);

// //while
// while (i >= 0) {
//     if (i % 2 !== 0) console.log(i);
//     i--;
// }

//for
//while
//do-while

//for-in
// const person = {
//     name: "Mosh",
//     age: 30
// };

// for (const key in person)
//    console.log(key, person[key]);

const colors = ["red", "green", "blue", "yellow"];

// for (const index in colors) {
//     console.log(index, colors[index]);
// }

// for (const color of colors) {
//     console.log(color);
// }

// let i = 0;
// while (i <= 10) {
//   //console.log(i);
//   //if (i === 5) break

//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// Write a function that takes two numbers and returns the maximum of the two.
// function max(a, b){
//     // if (a > b) return a;
//     // return b;
//     return a > b ? a : b;
// }

// console.log(max(3,5));

// function isLandscape(width, height){
//     return width > height; //? true : false
// }

// console.log(isLandscape(350,450));

// FizzBuzz
function fizzBuzz(input) {
  if (typeof input !== "number") console.log("Not a number");
  else if (input % 3 === 0 && input % 5 === 0) console.log("FizzBuzz");
  else if (input % 3 === 0) console.log("Fizz");
  else if (input % 5 === 0) console.log("Buzz");
  else console.log(input);
}
//fizzBuzz(23);

//! Demerit points
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (point >= 12) console.log("License suspended");
  else console.log("Points: ", points);
}

//checkSpeed(70);

// SHow even and odd numbers
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     // if (i % 2 === 0) console.log(`${i} "Even"`);
//     // else console.log(`${i} "Odd"`);

//     const message = (i % 2 === 0) ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }

// showNumbers(10);

//Count Truthy
// function countTruthy(array) {
//   let count = 0;
//     array.forEach(element => {
//       if (element) count++;
//    });
//   for (const value of array) {
//     if (value) count++;
//   }
//    console.log(count);
// }

// const array = [1,34,53,212,434, null, undefined, '', 0, NaN, false, true ];
// countTruthy(array);

// String properties
// function showProperties(object) {
//   for (const key in object)
//     if(typeof object[key] === 'string')
//       console.log(`${key}: ${object[key]}`);
// }

// const movie = {
//   title: "The Giants",
//   releaseKey: 2028,
//   rating: 5.0
// };

// showProperties(movie)

// // sum of multiples of 3 and 5
// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//       if (i % 3 === 0 || i % 5 === 0) sum += i;
//         console.log(sum);

//   return sum;
// }

// sum(10);

//Grade
// const marks = [80, 90, 32];

// function calculateGrade() {
//   const average = calculateAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   let sum = 0;
//   for (const value of array) sum += value;
//   return sum / array.length;
// }

// console.log(calculateGrade());

// Stars nested loops
function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) pattern += "*";
    console.log(pattern);
  }
}

//showStars(10);

//show prime numbers

function showPrimes(limit) {
  // iterating numbers from 2 to the limit
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
    
  return true;
}

showPrimes(10);
