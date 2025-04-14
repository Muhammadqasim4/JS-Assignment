const clock = document.getElementById("clock");
const alarmAudio = document.getElementById("azanAudio");
let alarmTime = null;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  clock.textContent = currentTime;

  if (alarmTime === `${hours}:${minutes}` && seconds === "00") {
    alarmAudio.play();
  }

  setTimeout(updateClock, 1000);
}

function setAlarm() {
  const input = document.getElementById("alarmTime").value;
  if (input) {
    alarmTime = input;
    document.getElementById("alarmStatus").textContent = `Alarm set for ${alarmTime}`;
  }
}

updateClock();
