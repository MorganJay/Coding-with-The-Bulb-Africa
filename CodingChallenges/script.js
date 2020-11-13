const fellows = [
  {
    name: "Mabamidu Muiz Abiodun",
    stack: "C#",
    sex: "Male",
    address: "10 Agunbiade street okekoto Agege Lagos",
    isMarried: false,
    Salary: 60000,
    qualification: "ND",
    Laptop: true,
  },
  {
    name: "Bakare Tosin ",
    stack: "JavaScript",
    sex: "Female",
    address: "120 Adejaminlore Abeokuta street Oyo",
    isMarried: false,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: false,
  },
  {
    name: "Junaid",
    stack: "C#",
    sex: "Male",
    address: "Lavish county",
    isMarried: false,
    Salary: 60000,
    qualification: "HND",
    Laptop: true,
  },
  {
    name: "Mobolade Akinlua",
    stack: "Javascript",
    sex: "Female",
    address: "Oshodi",
    isMarried: true,
    Salary: 60000,
    qualification: "Master",
    Laptop: true,
  },
  {
    name: "Daniel Agbia",
    stack: "C#",
    sex: "Male",
    address: "Onipanu Yaba",
    isMarried: true,
    Salary: 60000,
    qualification: "HND",
    Laptop: false,
  },
  {
    name: "Morgan James",
    stack: "C#",
    sex: "Male",
    address: "Lekki phase 2 Ajah",
    isMarried: false,
    Salary: 60000,
    qualification: "Phd",
    Laptop: true,
  },
  {
    name: "Folajimi Ayowale",
    stack: "Javascript",
    sex: "Male",
    address: "Akoka Yaba",
    isMarried: true,
    Salary: 60000,
    qualification: "ND",
    Laptop: false,
  },
  {
    name: "Abimbola Daniel",
    stack: "Javascript",
    sex: "Male",
    address: "Ojuelegba Shita",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: false,
  },
  {
    name: "Solomon Apple",
    stack: "Javascript",
    sex: "Male",
    address: "Ikeja",
    isMarried: true,
    Salary: 60000,
    qualification: "ND",
    Laptop: false,
  },
  {
    name: "Maruf Ajagunna",
    stack: "JavaScript",
    sex: "Male",
    address: "Bariga Lagos",
    isMarried: false,
    Salary: 60000,
    qualification: "PHD",
    Laptop: true,
  },
  {
    name: "Josh Ojuronmu",
    stack: "JavaScript",
    sex: "Male",
    address: "Yaba Ikeja",
    isMarried: true,
    Salary: 60000,
    qualification: "ND",
    Laptop: true,
  },
  {
    name: "Ugochukwu",
    stack: "JavaScript",
    sex: "Male",
    address: "Maryland",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Tamilore Zaid",
    stack: "JavaScript",
    sex: "Male",
    address: "Lekki phase 1 Ebute Meta",
    isMarried: false,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Tade",
    stack: "C#",
    sex: "Male",
    address: "Ketu mile 12",
    isMarried: true,
    Salary: 60000,
    qualification: "PHD",
    Laptop: false,
  },
  {
    name: "Seun",
    stack: "DevOps",
    sex: "Male",
    address: "Ikorodu Lagos",
    isMarried: true,
    Salary: 60000,
    qualification: "HND",
    Laptop: true,
  },
  {
    name: "Dorcas Emenoge",
    stack: "DevOps",
    sex: "Female",
    address: "Ketu Yaba",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Chiamaka am-a-class",
    stack: "C#",
    sex: "Female",
    address: "Ojota Bariga",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Olabayo Balogun",
    stack: "C#",
    sex: "Male",
    address: "Futa road akure Lagos",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: false,
  },
  {
    name: "Victoria ",
    stack: "DevOps",
    sex: "Female",
    address: "Palmgrove Yaba",
    isMarried: true,
    Salary: 60000,
    qualification: "PHD",
    Laptop: true,
  },
  {
    name: "Olawale Olalekan",
    stack: "C#",
    sex: "Male",
    address: "Apapa lagos",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Matthew Gamer",
    stack: "C#",
    sex: "Male",
    address: "Game avenue sabo Gamri Kano ",
    isMarried: true,
    Salary: 60000,
    qualification: "PHD",
    Laptop: false,
  },
  {
    name: "Bidemi",
    stack: "C#",
    sex: "Male",
    address: "Oshodi Mcolumo street Lagos",
    isMarried: true,
    Salary: 60000,
    qualification: "Bsc",
    Laptop: true,
  },
  {
    name: "Chi Senior man",
    stack: "JavaScript",
    sex: "Male",
    address: "Lekki Tollgate avenue Lagos",
    isMarried: true,
    Salary: 60000,
    qualification: "ND",
    Laptop: true,
  },
];
const overallTable = document.querySelector(".fellows").querySelector("tbody");
const marryLaptopTable = document
  .querySelector(".marriedLaptop")
  .querySelector("tbody");
const csharpTable = document.querySelector(".Csharp").querySelector("tbody");
const jsTable = document.querySelector(".JS").querySelector("tbody");
const femaleTable = document.querySelector(".females").querySelector("tbody");
const maleTable = document.querySelector(".males").querySelector("tbody");
const total = document.querySelector(".total");
const marriedFellows = fellows.filter(
  (fellow) => fellow.isMarried == true && fellow.Laptop == true
);
const csharpFellows = fellows.filter((fellow) => fellow.stack == "C#");
const jsFellows = fellows.filter((fellow) => fellow.stack == "JavaScript");
const femaleFellows = fellows.filter((fellow) => fellow.sex == "Female");
const maleFellows = fellows.filter((fellow) => fellow.sex == "Male");
const totalSalary = fellows.reduce((acc, fellow) => fellow.Salary + acc, 0);
total.textContent = numberFormat(totalSalary) + "NGN";

function numberFormat(string) {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showFellows() {
  fellows.forEach((fellow) => {
    overallTable.innerHTML += `<tr>
      <td>${fellow.name}</td>
      <td>${fellow.stack}</td>
      <td>${fellow.sex}</td>
      <td>${fellow.address}</td>
      <td>${fellow.isMarried}</td>
      <td>${numberFormat(fellow.Salary)}</td>
      <td>${fellow.qualification}</td>
      <td>${fellow.Laptop}</td>
      </tr>`;
  });
}

function showMarriedFellows() {
  marriedFellows.forEach((marriedFellow) => {
    marryLaptopTable.innerHTML += `<tr>
      <td>${marriedFellow.name}</td>
      <td>${marriedFellow.stack}</td>
      <td>${marriedFellow.sex}</td>
      <td>${marriedFellow.address}</td>
      <td>${marriedFellow.isMarried}</td>
      <td>${numberFormat(marriedFellow.Salary)}</td>
      <td>${marriedFellow.qualification}</td>
      <td>${marriedFellow.Laptop}</td>
      </tr>`;
  });
}

function showCsharpFellows() {
  csharpFellows.forEach((csharpFellow) => {
    csharpTable.innerHTML += `<tr>
    <td>${csharpFellow.name}</td>
    <td>${csharpFellow.stack}</td>
    <td>${csharpFellow.sex}</td>
    <td>${csharpFellow.address}</td>
    <td>${csharpFellow.isMarried}</td>
    <td>${numberFormat(csharpFellow.Salary)}</td>
    <td>${csharpFellow.qualification}</td>
    <td>${csharpFellow.Laptop}</td>
    </tr>`;
  });
}

function showJSFellows() {
  jsFellows.forEach((jsFellow) => {
    jsTable.innerHTML += `<tr>
    <td>${jsFellow.name}</td>
    <td>${jsFellow.stack}</td>
    <td>${jsFellow.sex}</td>
    <td>${jsFellow.address}</td>
    <td>${jsFellow.isMarried}</td>
    <td>${numberFormat(jsFellow.Salary)}</td>
    <td>${jsFellow.qualification}</td>
    <td>${jsFellow.Laptop}</td>
    </tr>`;
  });
}

function showFemaleFellows() {
  femaleFellows.forEach((fellow) => {
    femaleTable.innerHTML += `<tr>
    <td>${fellow.name}</td>
    <td>${fellow.stack}</td>
    <td>${fellow.sex}</td>
    <td>${fellow.address}</td>
    <td>${fellow.isMarried}</td>
    <td>${numberFormat(fellow.Salary)}</td>
    <td>${fellow.qualification}</td>
    <td>${fellow.Laptop}</td>
    </tr>`;
  });
}

function showMaleFellows() {
  maleFellows.filter((maleFellow) => {
    maleTable.innerHTML += `<tr>
    <td>${maleFellow.name}</td>
    <td>${maleFellow.stack}</td>
    <td>${maleFellow.sex}</td>
    <td>${maleFellow.address}</td>
    <td>${maleFellow.isMarried}</td>
    <td>${numberFormat(maleFellow.Salary)}</td>
    <td>${maleFellow.qualification}</td>
    <td>${maleFellow.Laptop}</td>
    </tr>`;
  });
}

showFellows();
showMarriedFellows();
showCsharpFellows();
showJSFellows();
showFemaleFellows();
showMaleFellows();