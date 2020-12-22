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

// const calculate = calculator;
// calculate.setA(0);
// calculate.setB(4);
// console.log(calculator);
// console.log(calculate.add());
// console.log(calculate.multiply());
// console.log(calculate.divide());
// console.log(calculate.subtract());
// console.log(calculate.modulo());

//Constructor function

function Calculator(firstNumber = 0, secondNumber = 0) {
  this.firstNumber = firstNumber;
  // let firstNumber = firstNumber;
  this.secondNumber = secondNumber;
  // let secondNumber = secondNumber;
  this.add = function () {
    let result = this.firstNumber + this.secondNumber;
    switch (typeof result) {
      case "number":
        return `The addition of ${this.firstNumber} and ${this.secondNumber} = ${result}`        
        
        default:
        return "Invalid operation"; 
    }
  };
  this.subtract = function () {
    return `The subtraction of ${this.secondNumber} from ${this.firstNumber} = ${this.firstNumber - this.secondNumber}`;
  };
  this.multiply = function () {
    return `The multiplication of ${this.firstNumber} and ${this.secondNumber} = ${this.firstNumber * this.secondNumber}`;
  };
  this.divide = function () {
     let result = this.firstNumber / this.secondNumber;
     console.log(typeof result);
     switch (typeof result) {
       case "number":
         if (result)
              return `The division of ${this.firstNumber} by ${this.secondNumber} = ${result}`;
       
       default:
         return "Invalid operation";
     }
  };
}

const myCalculator = new Calculator(9);
console.log(myCalculator.add());
console.log(myCalculator.multiply());
console.log(myCalculator.subtract());
console.log(myCalculator.divide());
