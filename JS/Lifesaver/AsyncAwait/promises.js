let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) resolve("Success");
  else reject("Failed");
});

// p.then((message) =>
//   console.log(`This is in the then ${message}`)
// ).catch((message) => console.log(`This is in the catch ${message}`));

// Callbacks
const userLeft = false;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) errorCallback({ name: "User Left", message: "😩" });
//   else if (userWatchingCatMeme)
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   else callback("Click the Thumbs Up and Subscribe to my channel");
// }

// watchTutorialCallback(
//   (message) => console.log(`Success: ${message}`),
//   (error) => console.log(`${error.name} \n${error.message}`)
// );

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) reject({ name: "User Left", message: "😩🤩👋🤤" });
    else if (userWatchingCatMeme)
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    else resolve("Click the Thumbs Up and Subscribe to my channel");
  });
}

watchTutorialPromise()
  .then((message) => console.log(`Success: ${message}`))
  .catch((error) => console.log(`${error.name} \n${error.message}`));

const recordVideoOne = new Promise((resolve) => resolve("Video 1 recorded"));
const recordVideoTwo = new Promise((resolve) => resolve("Video 2 recorded"));
const recordVideoThree = new Promise((resolve) => resolve("Video 3 recorded"));
const promises = [recordVideoOne, recordVideoTwo, recordVideoThree];

// Promise.all(promises).then((messages) => console.log(messages));
Promise.race(promises).then((messages) => console.log(messages));

let few = 56
function add(young , soft){
    if (few < 78){
        young('I am not sure for now ')
    } else {
        soft('I will be waiting for you downstairs')
    }
}

add(
  (facts) => {
    console.log(facts);
  },
  (facts) => {
    console.log(facts);
  }
);




