items = [
  { id: "a", val: 10, x: 3 },
  { id: "b", val: 6, w: 8 },
  { id: "c", val: 3, w: 3 },
];

maxWeight = 8;

bag = ["a", "b"]; //solution

function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

let start = performance.now();
let end = performance.now();

function sumUpFast(n) {
  return (n / 2) * (1 + n);
}
//Asymptotic Analysis
// - Define the function T = a*n + b;
// - Find the fastest growing term (a*n)
// - remove the coefficient T = n
let numbers = [1, 2, 3];

function sumArrayElements(array) {
  let sum = 0; // 1
  for (const number of array) {
    // 1
    sum += number; // 3 => n
  }
  return sum;
  // T = 1 + 1 + n + 1 = 3 + n = 3 + 1 *n
  // T = 1 * n
  // T = n => O(n) => Linear Time Complexity
}

function sumArray(array) {
  return array.reduce((sum, num) => sum + num, 0), start - end, "lead time";
}

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum, "sum", start - end, "lead time";
}

console.log(sumArrayElements(numbers));

// let a = 10;

// let a = 32;

function add(a = 0, b = 0) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}

const a = parseInt(prompt("Enter a"));
console.log(add("3", 4));

import calculator from './Lifesaver/calculator.js';

const calculate = new calculator;

calculate.add(3,2);