const kinsmenAge = [30, 56, 79];
let elderShare = 0;
let adultShare = 0;
let youthShare = 0;
let kidShare = 0;
const amountShared = new Array();

function moneyFormula(expenditure, ageArray) {
  ageArray.forEach((age) => {
    if (age >= 0 && age <= 20) {
      kidShare = 0.2 * expenditure;
      if (kidShare != 0) amountShared.push(kidShare);
    } else if (age >= 21 && age <= 45) {
      youthShare = 0.3 * expenditure;
      amountShared.push(youthShare);
    } else if (age >= 46 && age <= 65) {
      adultShare = 0.45 * expenditure;
      amountShared.push(adultShare);
    } else {
      elderShare = 0.5 * expenditure;
      amountShared.push(elderShare);
    }
  });
  output.textContent = amountShared;
  document.body.appendChild(output);
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.createElement("div");
  output.classList.add("amount");
  moneyFormula(40000, kinsmenAge);
});