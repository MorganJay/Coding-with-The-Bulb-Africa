// import calculator from "./calculator.js";

// calculator.add(3, 4);

const car = {
  brand: "",
  model: "",
  color: "",
  engine: "",
  setBrand: function (brand) {
    this.brand = brand;
  },
  setModel: function (model) {
    this.model = model;
  },
  reviewCar: function () {
    return `${this.brand} is unique`;
  },
};

const benz = car;
benz.setBrand("Benz");
//console.log(benz.reviewCar());
//console.log(car.brand);

const calculator = {
  A: 0,
  B: 0,
  setA: function (a = 0, b = 0) {
    this.A = parseInt(a);
    this.B = parseInt(b);
  },
  add: function () {
    console.log(`Addition of ${this.A} and ${this.B} = `, this.A + this.B);
  },

  subtract: function () {
    console.log(`Subtraction of ${this.A} and ${this.B} =`, this.A - this.B);
  },

  multiply: function () {
    console.log(
      `Multiplication of ${this.A} and ${this.B} = `,
      this.A * this.B
    );
  },

  divide: function () {
    console.log(`Division of ${this.A} and ${b} = `, this.A / this.B);
  },
};

const [first, second, third, fourth] = [10, 30, 23, 534, 23];

console.log(first); // 10
