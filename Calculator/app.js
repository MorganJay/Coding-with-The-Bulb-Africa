const ints = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

// Exercise 1
// Using the for loop, iterate over the ints array and
// populate the primeNums array with all the prime
// numbers in ints
const primeNums = [];
const getPrimeNumbers = () => {
    for (let i = 2; i <= ints.length; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                // primeNums.push(i);
            }
            primeNums.push(i);
        }
    }
    return primeNums;
};

console.log(getPrimeNumbers());



// Exercise 2
// Using the for-of loop, iterate over the ints array and
// populate the multiplesOfFve array with all the numbers
// in ints that are multiples of 5
const multiplesOfFive = [];
const getMultiplesOfFive = ()=>{
    for (const i of ints) {
        if (i % 5 === 0) {
            multiplesOfFive.push(i);
        }
    }
    return multiplesOfFive;
};
console.log(getMultiplesOfFive());