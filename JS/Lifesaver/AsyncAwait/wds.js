function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") resolve("Google says hi");
    else reject("We can only talk to Google.");
  });
}

function processRequest(response) {
  return new Promise((resolve) => {
    console.log("Processing Response");
    resolve(`${response} hehe`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => console.log(processResponse))
//   .catch((error) => console.log(error));

// To reduce nested thens
async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response Received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (error) {
    console.log(error);
  }
}
const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 1, 2, 34, 5, 67, 32, 12, 1, 3, 3, 4];
const unique = numbers.filter(
  (number, index) => numbers.indexOf(number) === index
);
console.log(unique);
// doWork();

const uno = () => {
  return "I am One";
};

// const dos = async () => {
//   setTimeout(() => {
//     return "I am Two";
//   }, 2000);
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("I am Two"), 2000);
  });
}; 

const tres = () => {
  return "I am Three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
