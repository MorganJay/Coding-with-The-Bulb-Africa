const word = "billy";

function firstToLast(string) {
  const stringArray = [...string];
  const firstCharacter = stringArray[0];
  const slicedString = stringArray.splice(1);
  console.log(slicedString);
  return slicedString.join("") + firstCharacter;
}

console.log(firstToLast(word));

function lastToFirst(string) {
  const stringArray = [...string];
  const lastCharacter = stringArray[stringArray.length - 1];
  const slicedString = stringArray.splice(0, stringArray.length - 1);
  console.log(slicedString);
  return lastCharacter + slicedString.join("");
}

console.log(lastToFirst(word));

function textToPigLatin(string) {
  const consonantClusters = ["bl", "br", "by", "cl", "cr", "cy", "ch", "gl"];
  const stringArray = string.toLowerCase().split(" ");
  const newStringArray = [];
  stringArray.forEach((string) => {
    newStringArray.push(firstToLast(string) + "ay");
  });
  const pigLatin = newStringArray.join(" ");
  return pigLatin.charAt(0).toUpperCase() + pigLatin.slice(1);
}

const pigLatin = textToPigLatin("the boy");
console.log(pigLatin);

function pigLatinToText(string) {
  const stringArray = string.toLowerCase().split(" ");
  const newStringArray = [];
  stringArray.forEach((string) => {
    const stringArray = [...string];
    stringArray.splice(string.length - 2, 2);
    const fixedString = lastToFirst(stringArray);
    newStringArray.push(fixedString);
  });
  const text = newStringArray.join(" ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(pigLatinToText(pigLatin));
