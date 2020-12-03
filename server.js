const timer = document.getElementById("timer");
const start = document.getElementById("start");
const lap = document.getElementById("lap");
const reset = document.getElementById("reset");
let lapArray = [];
let min = "0" + 0;
let sec = "0" + 0;
let milli = "0" + 0;
let isRunning = true;
let millisec = "";
let seconds = "";
let minutes = "";

const startTimer = () => {
  millisec = setInterval(() => {
    timer.innerHTML = min + ":" + sec + ":" + "0" + milli++;
    if (milli > 10) {
      milli = 0;
    }
  }, 100);

  seconds = setInterval(() => {
    milli = 00;
    timer.innerHTML = min + ":" + sec++;
    if (sec <= 9) {
      sec = "0" + sec;
    }
  }, 1000);

  minutes = setInterval(() => {
    sec = 00;
    timer.innerHTML = min++;
    if (min <= 9) {
      min = "0" + min;
    }
  }, 60000);
  isRunning = false;
  start.innerText = "Stop";
};

const pauseTimer = () => {
  clearTimeout(minutes);
  clearTimeout(seconds);
  clearTimeout(millisec);
  isRunning = true;
  start.innerText = "Start";
};

const lapTimer = () => {
  lapArray.push(min + ":" + sec + ":" + milli);
  let h2 = document.createElement("h2");
  h2.setAttribute("class", "laptimes");
  h2.innerHTML = lapArray[lapArray.length - 1];
  document.getElementById("laptimer").prepend(h2);
};

const resetTimer = () => {
  pauseTimer();
  min = "0" + 0;
  sec = "0" + 0;
  milli = "0" + 0;
  timer.innerHTML = min + ":" + sec + ":" + milli;
  lapArray = [];

  $("#laptimer").empty();
};

start.addEventListener("click", () => {
  if (isRunning) {
    startTimer();
  } else {
    pauseTimer();
  }
});
lap.addEventListener("click", () => lapTimer());
reset.addEventListener("click", () => resetTimer());
