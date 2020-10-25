//Normal time variables
let dmilliseconds;
let dseconds;
let dminutes;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let start;

//Laptimer variables
let lapstart = 0;
let lapnumber = 0;
let lapmilliseconds;
let lapseconds;
let lapminutes;
let lmilliseconds = 0;
let lseconds = 0;
let lminutes = 0;

//Global time variables and selectors
let leadingZero = 0;
let arrowup = "&#x2191;";
let htmarrow = "&uarr;";
const dhours = document.querySelector(".hours");
const display = document.querySelector(".time--display");
const lapTable = document.querySelector(".laps-table");
const lapTableBody = document.querySelector("tbody");
const lapTimerDisplay = document.querySelector(".laptimer");
const startBtn = document.querySelector(".button--start");
const resumeBtn = document.querySelector(".button--resume");
const resetBtn = document.querySelector(".button--reset");
const lapBtn = document.querySelector(".button--lap");
const stopBtn = document.querySelector(".button--stop");
const btn = document.querySelector(".btn");

function toggleDarkMode() {
  halfmoon.toggleDarkMode();
}

//Normal time functions
function displayTimer() {
  if (milliseconds < 10) {
    dmilliseconds = `0${milliseconds.toString()}`;
  } else {
    dmilliseconds = `${milliseconds}`;
  }

  if (seconds < 10) {
    dseconds = `0${seconds.toString()}`;
  } else {
    dseconds = `${seconds}`;
  }

  if (minutes < 10) {
    dminutes = `0${minutes.toString()}`;
  } else {
    dminutes = `${minutes}`;
  }

  if (hours < 10) {
    dhours.textContent = `0${hours.toString()}`;
  } else {
    dhours.textContent = `${hours}`;
  }

  if (hours >= 1) {
    display.innerHTML =
      dhours.textContent +
      ":" +
      dminutes +
      ":" +
      dseconds +
      "." +
      dmilliseconds;
  } else {
    display.innerHTML = dminutes + ":" + dseconds + "." + dmilliseconds;
  }
}

function timeCount() {
  if (milliseconds >= 99) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 59) {
      seconds = 0;
      minutes++;
      if (minutes >= 59) {
        minutes = 0;
        hours++;
      }
    }
  } else {
    milliseconds++;
  }
  displayTimer();
}

//Lap timer functions
function displayLapTimer() {
  if (lmilliseconds < 10) {
    lapmilliseconds = `0${lmilliseconds.toString()}`;
  } else {
    lapmilliseconds = `${lmilliseconds}`;
  }
  if (lseconds < 10) {
    lapseconds = `0${lseconds.toString()}`;
  } else {
    lapseconds = `${lseconds}`;
  }

  if (lminutes < 10) {
    lapminutes = `0${lminutes.toString()}`;
  } else {
    lapminutes = `${lminutes}`;
  }

  lapTimerDisplay.innerHTML =
    lapminutes + ":" + lapseconds + "." + lapmilliseconds;
}

function laptimeCount() {
  if (lmilliseconds >= 99) {
    lmilliseconds = 0;
    lseconds++;
    if (lseconds >= 59) {
      lseconds = 0;
      lminutes++;
      if (lminutes >= 59) {
        lminutes = 0;
      }
    }
  } else {
    lmilliseconds++;
  }
  displayLapTimer();
}

const countInArray = (array) => (value) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  return count;
};

const GetLapComparison = {
  getMinimumLap: () => {
    let laps = new Array();
    lapTableBody
      .querySelectorAll(".laptime")
      .forEach((time) => laps.push(time.textContent));
    const lap_times = {};
    laps = laps.map((lapTime) => {
      lap = Number(lapTime.replace(/:/g, ""));
      lap_times[lap] = lapTime;
      return lap;
    });
    return lap_times[Math.min(...laps)];
  },
  getMaximumLap: () => {
    let laps = new Array();
    lapTableBody
      .querySelectorAll(".laptime")
      .forEach((time) => laps.push(time.textContent));
    const laptimes = {};
    laps = laps.map((lapTime) => {
      lap = Number(lapTime.replace(/:/g, ""));
      laptimes[lap] = lapTime;
      return lap;
    });
    // console.log(lap_times);
    return laptimes[Math.max(...laps)];
  },
  getOverallMinimumTime: () => {
    let overallLaps = new Array();
    const olap_times = {};
    lapTableBody
      .querySelectorAll(".overalltime")
      .forEach((time) => overallLaps.push(time.textContent));
    overallLaps = overallLaps.map((overallTime) => {
      time = Number(overallTime.replace(/:/g, ""));
      olap_times[lap] = overallTime;
      return time;
    });
    return olap_times[Math.min(...overallLaps)];
  },
  getOverallMaximumTime: () => {
    return olap_times[Math.max(...overallLaps)];
  },
};

function lapComparison() {
  let lapRow = lapTableBody.querySelectorAll("tr");
  lapRow.forEach((tr) => {
    tr.classList.remove("min", "max");
    tr.children[0].removeAttribute("arrow-down");
    tr.children[0].removeAttribute("arrow-up");
  });
  lapRow.forEach((row) => {
    if (row.children[1].textContent == GetLapComparison.getMinimumLap()) {
      row.classList.add("min");
      row.children[0].setAttribute("arrow-down", "\u21D3");
    }
  });

  //maximum lap
  lapRow.forEach((row) => {
    if (row.children[1].textContent == GetLapComparison.getMaximumLap()) {
      row.classList.add("max");
      row.children[0].setAttribute("arrow-up", "\u21D1");
    }
  });
}

function lapPrint() {
  lapnumber++;
  let lap = document.createElement("tr");
  if (lapnumber === 1) {
    lapnumber = "0" + lapnumber.toString();
    lap.innerHTML = `<td>${lapnumber}</td>
                     <td class="laptime">${display.textContent}</td>
                     <td class="overalltime">${display.textContent}</td>`;
    lapTableBody.appendChild(lap);
  } else {
    if (lapnumber < 10) {
      lapnumber = "0" + lapnumber.toString();
    }
    lap.innerHTML = `<td>${lapnumber}</td>
                    <td class="laptime">${lapTimerDisplay.textContent}</td>
                    <td class="overalltime">${display.textContent}</td>`;
    lapTableBody.prepend(lap);
  }
  if (lapTableBody.childElementCount > 2) {
    lapComparison();
  }
}

function lapTimer() {
  lapTable.classList.remove("button--hide");
  lapTimerDisplay.classList.remove("button--hide");
  if (lapstart === 0) {
    lapstart = setInterval(laptimeCount, 10);
    displayLapTimer();
    lapPrint();
  } else {
    lapPrint();
    displayLapTimer();
    lminutes = 0;
    lseconds = 0;
    lmilliseconds = 0;
  }
}

function startTimer() {
  startbuttonHide();
  start = setInterval(timeCount, 10);
  displayTimer();
}

function stopTimer() {
  stopbuttonSwitch();
  clearInterval(start);
  clearInterval(lapstart);
  displayTimer();
  if (lapnumber >= 1) {
    displayLapTimer();
  }
}

function resetTimer() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  lapnumber = 0;
  lminutes = 0;
  lseconds = 0;
  lmilliseconds = 0;
  clearInterval(start);
  clearInterval(lapstart);
  lapstart = 0;
  lapTableBody.querySelectorAll("tr").forEach((tr) => tr.remove());
  startBtn.classList.remove("button--hide");
  resetBtn.classList.add("button--hide");
  resumeBtn.classList.add("button--hide");
  lapTable.classList.add("button--hide");
  lapTimerDisplay.classList.add("button--hide");
  displayTimer();
  displayLapTimer();
}

function resumeTimer() {
  resumeBtn.classList.add("button--hide");
  stopBtn.classList.remove("button--hide", "moveLeft");
  resetBtn.classList.add("button--hide");
  lapBtn.classList.remove("button--hide", "moveRight");
  start = setInterval(timeCount, 10);
  if (lapnumber != 0) {
    lapstart = setInterval(laptimeCount, 10);
  }
}

function startbuttonHide() {
  startBtn.classList.add("button--hide");
  stopBtn.classList.remove("button--hide");
  stopBtn.classList.add("moveLeft");
  lapBtn.classList.remove("button--hide");
  lapBtn.classList.add("moveRight");
}

function stopbuttonSwitch() {
  stopBtn.classList.add("button--hide");
  lapBtn.classList.add("button--hide");
  resumeBtn.classList.remove("button--hide");
  resetBtn.classList.remove("button--hide");
}

btn.addEventListener("click", toggleDarkMode);
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
lapBtn.addEventListener("click", lapTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);
