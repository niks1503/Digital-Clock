const hours = document.querySelector(".hours_para");
const minutes = document.querySelector(".minutes_para");
const seconds = document.querySelector(".seconds_para");
const am_pm = document.querySelector(".am-pm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
    am_pm.innerText = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
