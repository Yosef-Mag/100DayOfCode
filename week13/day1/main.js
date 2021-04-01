var spaceship = document.querySelector(".spaceship"),
    fire = document.querySelector(".fire"),
    btnLaunch = document.querySelector(".btnLaunch"),
    btnLand = document.querySelector(".btnLand"),
    btnStart = document.querySelector(".btnStart"),
    txtLaunch = document.querySelector(".btnLaunch span"),
    txtLand = document.querySelector(".btnLand span"),
    txtStart = document.querySelector(".btnStart span"),
    shadow = document.querySelector(".shadow");

    btnLaunch.addEventListener("click", launch);
    btnLand.addEventListener("click", land);
    btnStart.addEventListener("click", start);

function launch() {
   btnStart.classList.add("disable");
   fire.classList.add("burn");
   spaceship.classList.remove("land");
   spaceship.classList.add("launch");
   spaceship.removeEventListener("animationend", burn);
   shadow.style.opacity = "0";
   btnLaunch.classList.add("active");
   btnStart.disabled = true;
   btnStart.classList.remove("active");
   btnLand.classList.remove("active");
   btnLand.classList.remove("disable");
   btnLand.disabled = false;
   txtLaunch.innerText = "launched!";
   txtStart.innerText = "start";
   txtLand.innerText = "land";
}

function land() {
   spaceship.classList.remove("launch");
   spaceship.classList.add("land");
   spaceship.addEventListener("animationend", burn);
   btnLaunch.classList.remove("active");
   btnLand.classList.add("active");
   btnStart.classList.remove("disable");
   btnStart.disabled = false;
   txtLand.innerText = "landed!";
   txtLaunch.innerText = "launch";
}

function burn() {
   fire.classList.remove("burn");
   spaceship.classList.remove("land");
   shadow.style.opacity = "0.2";
   btnLand.classList.remove("active");
   btnLand.classList.add("disable");
   btnLand.disabled = true;
   txtLand.innerText = "land";
}

function start() {
   if (btnStart.classList.contains("active")) {
      fire.classList.remove("burn");
      btnStart.classList.remove("active");
      txtStart.innerText = "start";
   } else {
      fire.classList.add("burn");
      btnStart.classList.add("active");
      txtStart.innerText = "stop";
      btnLand.classList.remove("active");
   }
}

function stop() {
   fire.classList.remove("burn");
}
