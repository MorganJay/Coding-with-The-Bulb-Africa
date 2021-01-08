const list = [1, 2, 3];

//foreach
Array.prototype.customForEach = function (callback) {
  if (!callback || typeof callback !== "function")
    throw Error("The callback provided is not a function.");

  if (!this) throw Error("Cannot call forEach on null or undefined");

  for (let i = 0; i < this.length; i++) callback(this[i], i, this);
};

//list.customForEach((elem, i, array) => console.log(elem, i, array));

//map
Array.prototype.customMap = function (callback) {
  if (!callback || typeof callback !== "function")
    throw Error("The callback provided is not a function.");

  if (!this) throw Error("Cannot call map on null or undefined");

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const newValue = callback(this[i], i, this);
    newArray.push(newValue);
  }

  return newArray;
};

// list
//   .customMap((elem) => elem * elem)
//   .customForEach((elem) => console.log(elem));

// console.log(list);

//filter
Array.prototype.customFilter = function (callback) {
  if (!callback || typeof callback !== "function")
    throw Error("The callback provided is not a function.");

  if (!this) throw Error("Cannot call filter on null or undefined");

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const passesTest = callback(this[i], i, this);

    if (passesTest) newArray.push(this[i]);
  }

  return newArray;
};

list
  .customFilter((elem) => elem % 2 === 0)
  .customForEach((elem) => console.log(elem));

// reduce
Array.prototype.customReduce = function (callback, initialValue) {
  if (!callback || typeof callback !== "function")
    throw Error("The callback provided is not a function.");

  if (!this) throw Error("Cannot call forEach on null or undefined");

  let accumulator = initialValue || this[0];

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && !initialValue) continue;
    const newValue = callback(accumulator, this[i], i, this);
    accumulator = newValue;
  }

  return accumulator;
};

const sum = list.customReduce((acc, elem) => acc + elem, 5);
console.log(sum);
