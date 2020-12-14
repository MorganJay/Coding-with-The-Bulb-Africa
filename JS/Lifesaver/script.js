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

//temperature object literal
// celsius to fahrenheit
// fahrenheit to celsius

const temperature = {
  celsius: 0,
  fahrenheit: 0,
  setCelsius: function (temp = 0) {
    this.celsius = parseInt(temp);
  },
  setFahrenheit: function (temp = 0) {
    this.fahrenheit = parseInt(temp);
  },
  toCelsius: function () {
    if (this.celsius > 0) return this.celsius;

    this.celsius = (this.fahrenheit - 32) * (5 / 9);
    console.log(`${this.celsius} Fahrenheit equals ${this.celsius.toFixed(2)} Celsius`);
  },
  toFahrenheit: function () {
    if (this.fahrenheit > 0) return this.fahrenheit;

    this.fahrenheit = this.celsius * (9 / 5) + 32;
    console.log(`${this.celsius} Celsius equals ${this.fahrenheit.toFixed(2)} F`);
  },
};

temperature.setCelsius();
//console.log(temperature.toCelsius());
temperature.toFahrenheit();
