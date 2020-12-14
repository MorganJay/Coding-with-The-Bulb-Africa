// const calculator = {
//   add: function (a, b) {
//     console.log(`Addition of ${a} and ${b} =`, a + b);
//   },
//   subtract: function (a, b) {
//     console.log(a - b);
//   },
// };

// export default calculator;

// const add = (a, b) => console.log(`Addition of ${a} and ${b}`, a + b);

// const subtract = (a, b) => console.log(`Subtraction of ${a} and ${b} =`, a - b);

// const multiply = (a, b) => console.log(`Multiplication of ${a} and ${b} =`, a * b);

// const divide = (a, b) => {
//   console.log(`Division of ${a} and ${b} =`, a / b);
// };

// add(4, 5);
// subtract(6, 1);
// multiply(3, 7);
// divide(4, 2);

//David's solution
const calculator = {
  A: 0,
  B: 0,
  setA: function (a = 0, b = 0) {
    this.A = parseInt(a);
    this.B = parseInt(b);
  },
  add: function () {
    return this.A + this.B;
  },
  subtract: function () {
    return this.A - this.B;
  },
  multiply: function () {
    return this.A * this.B;
  },
  divide: function () {
    return this.A / this.B;
  },
  modulo: function () {
    return this.A % this.B;
  },
};

const calculate = calculator;
calculate.setA(0);
calculate.setB(4);
console.log(calculator);
console.log(calculate.add());
console.log(calculate.multiply());
console.log(calculate.divide());
console.log(calculate.subtract());
console.log(calculate.modulo());
