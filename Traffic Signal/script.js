const lights = document.querySelectorAll('.light');
let index = 0;

function changeLight() {
  lights.forEach(light => light.classList.remove('active'));
  lights[index].classList.add('active');
  index = (index + 1) % lights.length;
}

setInterval(changeLight, 3000);
changeLight();
