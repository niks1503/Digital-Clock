const hours = document.querySelector(".hours_para");
const minutes = document.querySelector(".minutes_para");
const seconds = document.querySelector(".seconds_para");

function updateClock() {
  let h = new Date().getHours();
  hours.innerText = h;
  let m = new Date().getMinutes();
  minutes.innerText = m;
  let s = new Date().getSeconds();
  seconds.innerText = s;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
