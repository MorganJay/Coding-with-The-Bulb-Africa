// async function som() {
//   this.a = 6;

//console.log(a);
//   const change = setTimeout(async () => {
//     console.log(this.a);
//     this.a += 10;
//   }, 3000);
//   await change;
//   return a;
// }
//
//som().then((data) => console.log(data));
// let a = 6;
// async function change() {
//   await setTimeout(() => (a += 10), 3000);
//   console.log(a);
// }

//change();
//console.log(a);

// question

// const change = () => a += 10;
var a = 6;

const change = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve((a += 10)), 3000);
  });
};

const bigChange = async () => {
  await change();
  console.log(a);
};

// bigChange();
// console.log(a);
var a = 1;
const add11 = () => {
  return new Promise((resolve, reject) => {
    resolve(a + 11);
    reject("I cannot carry out this operation");
  });
};

const sub5 = () => {
  //console.log("Expected Value", val);
  return new Promise((resolve, reject) => {
    resolve(a - 5);
    //throw "Error"
    reject("I cannot carry out this operation");
  });
};

add11().then((response) => {
  // console.log(response); // 12
  // return sub5(response);
});
// .then((response) => {
//   console.log(response); // 0
//   console.log(a + 15); // 20
// })
// .catch((err) => console.log(err))
// .finally(() => console.log("Finally here"));

sub5().then((response) => {
  //console.log(response); //-4
});

const overSabi = async () => {
  const addResponse = await add11(); //12
  console.log(addResponse);
  const subtraction = await sub5();
  console.log(subtraction);
  console.log(a + 15); //16
};

overSabi();
