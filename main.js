const answers = ["No", "Are you sure?", "Really sure?", "Are you positive?", "Pookie Please", "Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very very sad", "Fine, I'll stop asking!", "Just kdding, PLEASE SAY YES!!", "I'll be very very very very very very sad", "You're breaking my heart :("];
let counter = 1;

const image = document.getElementById('gif');
const heading = document.getElementById('headline');
const YES = document.getElementById('yes');
const NO = document.getElementById('no');
const buttons = document.getElementsByClassName('button-container')[0].classList;
console.log(buttons);
const w_factor = 4;
const h_factor = 3;
const f_factor = 0.1;

function Answer(answer) {
  const style = window.getComputedStyle(YES);
  let width = style.getPropertyValue("width");
  let height = style.getPropertyValue("height");
  let fontsize = style.getPropertyValue('font-size');
  fontsize = parseInt(fontsize.replace('px', ''));
  width = parseInt(width.replace('px', ''));
  height = parseInt(height.replace('px', ''));

  if (counter > 12) {
    counter = 0;
  }

  if (answer) {
    image.src = './static/bearkiss.gif';
    buttons.add('hidden');
    heading.innerHTML = "OkYAwww! YAY!!!";
  }
  else {
    console.log(fontsize);
    width += w_factor;
    height += h_factor;
    fontsize += f_factor;
    YES.style.width = width + "px";
    YES.style.height = height + "px";
    console.log(fontsize);
    YES.style.fontSize = fontsize + "px";
    NO.innerHTML = answers[counter];

    counter += 1;
  }
}