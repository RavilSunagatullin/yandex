function playSound(keyCode) {
  let audio;

  if (keyCode === "65") {
    // Если это клавиша A
    audio = new Audio("sound/proizvolnyiy-sintezatornyiy-zvuk.mp3");
  } else if (keyCode === "83") {
    // Если это клавиша S
    audio = new Audio("sound/sintezator-effekt-8.mp3");
  } else if (keyCode === "68") {
    // Если это клавиша S
    audio = new Audio("sound/sintezator-effekt-23.mp3");
  }
  // Если аудиофайл определён, воспроизводим его
  if (audio) {
    audio.play();
  }
}
function handleKeyDown(event) {
  let keyElement = document.querySelector('[data-key="' + event.keyCode + '"]');
  if (keyElement) {
    playSound(keyElement.dataset.key);
  }
}
function init() {
  let keys = document.querySelectorAll(".key");

  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
      playSound(keys[i].dataset.key);
    });
  }
  document.addEventListener("keydown", handleKeyDown);
}
init()
