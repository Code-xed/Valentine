document.addEventListener("DOMContentLoaded", init)
window.addEventListener("load", () => {
  const overlay = document.getElementById("overlay")
  setTimeout(() => {
    overlay.style.opacity = "0"
    setTimeout(() => overlay.remove(), 200)
  }, 150)
})

window.addEventListener("load", function() {
    preloadGifs([
        "./static/peace-cat.gif",
        "./static/bearkiss.gif",
        "./static/roseday.gif",
        "./static/propose.gif",
        "./static/chocolate.gif",
        "./static/teddy.gif",
        "./static/promise.gif",
        "./static/hug.gif",
        "./static/kiss.gif",
        "./static/valenday.gif"
    ]);
});

function preloadGifs(urls) {
    let loaded = 0;
    const total = urls.length;

    showOverlay(); // stays visible, no auto-hide

    for(let i = 0; i < total; i++) {
        const img = new Image();
        img.onload = img.onerror = function() {
            loaded++;
            if(loaded === total) {
                blur(10); // auto-hide after default 150ms
            }
        };
        img.src = urls[i];
    }
}
function showOverlay() {
  if (document.getElementById("overlay")) return

  const overlay = document.createElement("div")
  overlay.id = "overlay"
  document.body.appendChild(overlay)
}

function hideOverlay() {
  const overlay = document.getElementById("overlay")
  if (!overlay) return

  overlay.style.opacity = "0"
  setTimeout(() => overlay.remove(), 200)
}

function blur(ms=150) {
    showOverlay();

    if(blurTimer) {
        clearTimeout(blurTimer);
    }

    blurTimer = setTimeout(function() {
        hideOverlay();
        blurTimer = null;
    }, ms);
}

let blurTimer = null;
const answers = ["No", "Are you sure?", "Really sure?", "Are you positive?", "Pookie Please", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very very sad", "Fine, I'll stop asking!", "Just kdding, PLEASE SAY YES!!", "I'll be very very very very very very sad", "You're breaking my heart :("];

const container = document.querySelector(".questions");
const image = document.getElementById('gif');
const heading = document.getElementById('headline');
const YES = document.getElementById('yes');
const NO = document.getElementById('no');
const buttons = document.getElementsByClassName('button-container')[0].classList;
const tryagain = document.getElementById('tryagain');
//console.log(buttons);

function init() {
  YES.addEventListener("click", () => Answer(true))
  NO.addEventListener("click", () => Answer(false))
  tryagain.addEventListener("click", resetUI)
}

const w_factor = 4;
const h_factor = 3;
const bgAudio = new Audio("./static/sounds/bgsong.mp3");
const denialAudio = new Audio("./static/sounds/meow.mp3");

let counter = 1;

function playAudio() {
  bgAudio.currentTime = 5;
  bgAudio.play();
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
    playAudio();
    slide1();
  }
  else {
    blur();
    tryagain.classList.remove("hidden");
    image.src = './static/peace-cat.gif';
    buttons.add('hidden');
    heading.textContent = "did you just say i'll skip?";
    //width += w_factor;
    //height += h_factor;
    //YES.style.width = width + "px";
    //YES.style.height = height + "px";
    NO.textContent = answers[counter];
    counter += 1;
  }
}

function tryAgain(btn, para, nope) {
  image.src = "./static/dareu.gif";
  btn.textContent = "try again.";
  para.textContent = "did you just say no?";
  //const again = document.createElement("button");
  btn.onclick = function() {
    denialAudio.pause();
    bgAudio.play();
    propose(btn, para);
  };
  nope.remove();
}

function resetUI() {
  location.reload();
}

function slide1() {
  blur();
  heading.textContent = "gooooood";
  const btn = document.createElement("button");
  btn.textContent = "Next";
  btn.onclick = function() {
    slide2(btn);
  };
  container.appendChild(btn)
}

function slide2(btn) {
  blur();
  //bt.remove();
  heading.textContent = "are you ready for 7 days of love?";
  //const btn = document.createElement("button")
  btn.textContent = "ofcc";
  btn.onclick = function() {
    rose(btn);
  };
  //btn.addEventListener("click", () => rose(btn));
  //container.appendChild(btn)
}

function rose(btn) {
  function showButton() {
    container.appendChild(btn);
  }
  
  blur();
  btn.remove();
  image.src = "./static/roseday.gif";
  heading.textContent = "HAPPY ROSE DAY 🌹";
  const para = document.createElement('p');
  //const btn = document.createElement("button");
  btn.textContent = "🥀";
  typeText(para, "This virtual bouquet is for you - a quiet inder of everything I feel but don't always Every rose in it carries a little piece of my t: the way you make me smile, the way you like home, and the way choosing you feels -tless. Even if I can't place these flowers in ur hands, I hope you feel the love behind . This bouquet isn't just for Rose Day - it's you, today, tomorrow, and every time my heart finds its way back to you", showButton);
  //btn.addEventListener("click", () => propose(btn, para));
  btn.onclick = function() {
    propose(btn, para);
  };
  container.appendChild(para);
}

function propose(btn, para) {
  blur();
  btn.remove();
  image.src = "./static/propose.gif";
      heading.textContent = "HAPPY PROPOSE DAY 💌";
  //const yes = document.createElement('button');
  const nope = document.createElement("button");
  //yes.textContent = "yes!!";
  nope.textContent = "no";
  btn.textContent = "yes!!";
  typeText(para, "a choice I'm making with my whole heart. I want to walk with you through every phase, every high and every quiet day. So here I am, honestly and completely...will you be mine?", showChoice);
  //no.onclick = function() {
  //  tryagain(btn, para);
 // }
  nope.onclick = function() {
    denialAudio.currentTime = 1;
    bgAudio.pause();
    denialAudio.play();
    tryAgain(btn, para, nope);
    heading.textContent = "";
  };
  
  btn.onclick = function() {
    nope.remove();
    chocolate(btn, para);
  };
  
  //container.appendChild(para);
  function showChoice() {
    container.appendChild(nope);
    container.appendChild(btn);
  }
}

function chocolate(btn, para) {
  blur();
  image.src = "./static/chocolate.gif";
  heading.textContent = "HAPPY CHOCOLATE DAY 🍫";
  //const para = document.createElement('p');
  ///const btn = document.createElement("button");
  btn.textContent = "next";
  para.textContent = "Some sweetness stays with you forever, and that's exactly how you make me feel. Every moment with you is comforting, joyful, and impossible to forget. Today, this chocolate is just a little reminder of how much richer, warmer, and sweeter my life is with you in it.";
  //btn.addEventListener("click", () => propose(btn));
  //container.appendChild(para)
  //container.appendChild(btn)
  btn.onclick = function() {
    teddy(btn, para);
  };
}

function teddy(btn, para) {
  //bt.remove();
  blur();
  image.src = "./static/teddy.gif";
  heading.textContent = "HAPPY TEDDY DAY 🧸";
 // const para = document.createElement('p');
 // const btn = document.createElement("button");
  btn.textContent = "more";
  para.textContent = "This digital teddy comes with all my love, care, and thoughts for you. Even if it's just pixels on your screen, let it remind you that no distance, no time, nothing can change how much you mean to me. You're always in my heart, and always mine";
  //btn.addEventListener("click", () => propose(btn));
  //container.appendChild(para)
  //container.appendChild(btn)
  btn.onclick = function() {
    promise(btn, para);
  };
}

function promise(btn, para) {
  //bt.remove();
  blur();
  image.src = "./static/promise.gif";
  heading.textContent = "HAPPY PROMISE DAY 💫";
  //const para = document.createElement('p');
  //const btn = document.createElement("button");
  btn.textContent = "nexttt";
  para.textContent = "I promise to always choose you, to stand by you through every high and low, and to love you in ways that matter - in actions, in care, and in consistency. This promise isn't just for today; it's for every day, every moment, and everything we'll face together. You're my heart, my home, my forever";
  //btn.addEventListener("click", () => propose(btn));
 // container.appendChild(para)
  //container.appendChild(btn)
  btn.onclick = function() {
    hug(btn, para);
  };
}

function hug(btn, para) {
  //bt.remove();
  blur();
  image.src = "./static/hug.gif";
  heading.textContent = "HAPPY HUG DAY 🫂"; 
  //const para = document.createElement('p');
  //const btn = document.createElement("button");
  btn.textContent = "more";
  para.textContent = "I may not be there to hold you right now, but let this virtual hug carry all my warmth, care, and love for you. Imagine my arms wrapped around you, keeping you safe, close, and loved. Every time you feel it, know that it's me - thinking of you, missing you, and holding you in my heart";
  //btn.addEventListener("click", () => propose(btn));
  //container.appendChild(para)
  //container.appendChild(btn)
  btn.onclick = function() {
    kiss(btn, para);
  };
}

function kiss(btn, para) {
  //bt.remove();
  
  blur();
  image.src = "./static/kiss.gif";
  heading.textContent = "HAPPY KISS DAY 💋";
  //const para = document.createElement('p');
  //const btn = document.createElement("button");
  btn.textContent = "awww";
  typeText(para, "I wish I could be there to hold you close, but until then, this kiss is for you - a little piece of me, sent straight to your heart. Even from distance, let it remind you that you're mine, that I'm thinking of you, and that every moment I can't be with you, I'm still loving you fiercely");
  //btn.addEventListener("click", () => propose(btn));
  //container.appendChild(para)
  //container.appendChild(btn)
  btn.onclick = function() {
    valentines(btn, para);
  };
}

function valentines(btn, para) {
  btn.remove();
  para.remove();
  blur();
  image.src = "./static/valenday.gif";
  heading.textContent = "HAPPY VALENTINE'S DAY, I LOVE YOU💘";
  //const para = document.createElement('p');
  //const btn = document.createElement("button");
  //btn.textContent = "yayy";
  //para.textContent = "";
}

let typingId = 0;

function typeText(el, text, onDone, speed = 80) {
    typingId++;              // invalidate previous runs
    const id = typingId;
    el.textContent = "";
    let i = 0;
    function tick() {
        if(id !== typingId) return; // STOP leaked timers
        if(i < text.length) {
            el.textContent += text[i++];
            setTimeout(tick, speed);
        } else {
            if(onDone) onDone();
        }
    }
    tick();
}