function updateHours() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const timerElement = document.querySelector(".clock");
  timerElement.innerHTML = time;
}

updateHours();
setInterval(updateHours, 1000);
