document.addEventListener("DOMContentLoaded", init)
window.addEventListener("load", () => {
  const overlay = document.getElementById("overlay")
  setTimeout(() => {
    overlay.style.opacity = "0"
    setTimeout(() => overlay.remove(), 200)
  }, 150)
})
function init() {
  YES.addEventListener("click", () => Answer(true))
  NO.addEventListener("click", () => Answer(false))
  tryagain.addEventListener("click", resetUI)
}

const answers = ["No", "Are you sure?", "Really sure?", "Are you positive?", "Pookie Please", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very very sad", "Fine, I'll stop asking!", "Just kdding, PLEASE SAY YES!!", "I'll be very very very very very very sad", "You're breaking my heart :("];

const container = document.querySelector(".questions");
const image = document.getElementById('gif');
const heading = document.getElementById('headline');
const YES = document.getElementById('yes');
const NO = document.getElementById('no');
const buttons = document.getElementsByClassName('button-container')[0].classList;
const tryagain = document.getElementById('tryagain');
//console.log(buttons);

const w_factor = 4;
const h_factor = 3;
const audio = new Audio("./static/meme.mp3");

let counter = 1;

function playAudio() {
  //audio.currentTime = 0;
  //audio.play();
}

function Answer(answer) {
  const style = window.getComputedStyle(YES);
  let width = style.getPropertyValue("width");
  let height = style.getPropertyValue("height");

  width = parseInt(width.replace('px', ''));
  height = parseInt(height.replace('px', ''));

  if (counter > 12) {
    counter = 0;
  }

  if (answer) {
    image.src = './static/bearkiss.gif';
    buttons.add('hidden');
    slide1();
    heading.innerHTML = "OkYAwww! YAY!!!";
  }
  else {
    playAudio();
    tryagain.classList.remove("hidden");
    image.src = './static/peace-cat.gif';
    buttons.add('hidden');
    heading.innerHTML = "did you just say i'll skip?";
    //width += w_factor;
    //height += h_factor;
    //YES.style.width = width + "px";
    //YES.style.height = height + "px";
    NO.innerHTML = answers[counter];
    counter += 1;
  }
}

function resetUI() {
  location.reload();
}

function slide1() {
  heading.innerHTML = "goooood";
  const btn = document.createElement("button")
  btn.textContent = "Next"
  btn.addEventListener("click", () => slide2());
  container.appendChild(btn)
}

function slide2() {
  
}