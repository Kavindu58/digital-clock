function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = currentTime;

  // Date
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  document.getElementById("year").textContent = year;
  document.getElementById("date").textContent = `${month}-${day}`;
}

updateClock();
setInterval(updateClock, 1000);
