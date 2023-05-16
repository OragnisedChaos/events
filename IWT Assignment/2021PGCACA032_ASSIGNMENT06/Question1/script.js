// JavaScript
const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime;
let interval;

startBtn.addEventListener('click', () => {
  startTime = new Date();
  interval = setInterval(updateTime, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  display.innerHTML = '00:00:00';
});

function updateTime() {
  const currentTime = new Date();
  const timeDiff = currentTime - startTime;

  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  display.innerHTML = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
