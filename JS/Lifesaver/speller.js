//CodeAcademy exercise
function speller(string) {
  return string.match(/[A-z]/i) ? string[0] : "All done";
}

console.log(speller("Zoe")); // Z
console.log(speller("")); // All done
console.log(speller("eren")); // e
