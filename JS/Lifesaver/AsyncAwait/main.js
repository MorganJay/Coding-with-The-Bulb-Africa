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
let a = 6;
const change = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve((a += 10)), 3000);
  });
};

// const change = () => a += 10;
const bigChange = async () => {
  await change();
  //console.log(a);
};

bigChange();
console.log(a);
//console.log(a);
