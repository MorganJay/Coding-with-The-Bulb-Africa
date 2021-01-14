// const temperature = {
//   celsius: undefined,
//   fahrenheit: undefined,
//   setCelsius: function (temp = 0) {
//     this.celsius = temp;
//   },
//   setFahrenheit: function (temp = 0) {
//     this.fahrenheit = temp;
//   },
//   toCelsius: function () {
//     switch (typeof this.fahrenheit) {
//       case undefined:
//         return "Temperature in Fahrenheit has not been set";

//       case "number":
//         let convertedTemperature = (this.fahrenheit - 32) * (5 / 9);
//         return `${this.fahrenheit}\u00B0F equals ${convertedTemperature.toFixed(2)}\u00B0C`;

//       default:
//         console.log(typeof this.fahrenheit);
//         return "Invalid temperature value";
//     }
//   },
//   toFahrenheit: function () {
//     if (this.celsius === undefined)
//       return "Temperature in Celsius has not been set";
//     let convertedTemperature = this.celsius * (9 / 5) + 32;
//     return `${this.celsius}\u00B0C equals ${convertedTemperature.toFixed(2)}\u00B0F`;
//   },
// };

// const thermometer = temperature;
// thermometer.setFahrenheit(99);
// //thermometer.setCelsius(92);
// console.log(thermometer.toFahrenheit());
// console.log(thermometer.toCelsius());

// const { celsius, fahrenheit } = temperature;

// console.log(celsius);

// const temperatureApi = {
//   setParams(input = 0, initialTemp = "", convertedTemp = "") {
//     this.input = input;
//     this.initialTemp = initialTemp.toLowerCase();
//     this.convertedTemp = convertedTemp.toLowerCase();
//   },
//   convert() {
//     let result = 0;
//     // check if both units are the same
//     if (this.initialTemp === this.convertedTemp) return `${this.input}\u00B0${this.initialTemp.toUpperCase()}`;
//     if (this.initialTemp && this.convertedTemp) {
//       switch (typeof this.input) {
//         case "number":
//           // celsius to fahrenheit
//           if (this.initialTemp == "c" && this.convertedTemp == "f") {
//             result = this.input * (9 / 5) + 32;
//             return `${this.input}\u00B0C equals ${result.toFixed(2)}\u00B0F`;
//           }
//           // fahrenheit to celsius
//           if (this.initialTemp == "f" && this.convertedTemp == "c") {
//             result = (this.input - 32) * (5 / 9);
//             return `${this.input}\u00B0F equals ${result.toFixed(2)}\u00B0C`;
//           }
//           //
//           break;

//         default:
//           return "Temperature has not been set";
//       }
//     } else return "Temperature conversion units not set";
//   }
// };

//Constructor function for temperature conversion
// ES6 Class now
class TemperatureConverter {
  constructor(temperatureValue = 0, initialTemp = "", convertedTemp = "") {
    this.temp = parseFloat(temperatureValue);
    this.initialTemp = initialTemp.toLowerCase();
    this.convertedTemp = convertedTemp.toLowerCase();
  }
  convert() {
    let result = 0;
    // check if both units are the same
    if (this.initialTemp === this.convertedTemp) return `${this.temp}\u00B0${this.initialTemp.toUpperCase()}`;
    if (this.initialTemp && this.convertedTemp) {
      switch (typeof this.temp) {
        case "number":
          // celsius to fahrenheit
          if (this.initialTemp == "c" && this.convertedTemp == "f") {
            result = this.temp * (9 / 5) + 32;
            return `${this.temp}\u00B0C equals ${result.toFixed(2)}\u00B0F`;
          }
          // fahrenheit to celsius
          if (this.initialTemp == "f" && this.convertedTemp == "c") {
            result = (this.temp - 32) * (5 / 9);
            return `${this.temp}\u00B0F equals ${result.toFixed(2)}\u00B0C`;
          }
          break;

        default:
          return "Temperature has not been set";
      }
    } else return "Temperature conversion units not set";
  }
}
 
export default TemperatureConverter;