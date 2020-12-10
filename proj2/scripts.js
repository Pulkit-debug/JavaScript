const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

var getBGColor = (color) => {
  return window.getComputedStyle(color).backgroundColor;
};

// var redElementColor = getBGColor(red);

// orange.addEventListener("click", () => {
//     center.style.backgroundColor = redElementColor;
// });

const colorChanger = (element, color) => {
  element.addEventListener("mouseover", () => {
    center.style.background = color;
  });
};

colorChanger(red, getBGColor(orange));
colorChanger(cyan, getBGColor(cyan));
colorChanger(voilet, getBGColor(voilet));
colorChanger(orange, getBGColor(orange));
colorChanger(pink, getBGColor(pink));

const playAudio = (element) => {
  //   var audio = document.getElementById("audio");
  //   var playing = false;

  let count = 0;
  //   element.addEventListener("click", () => {
  //     count++;
  //   });

  let audio;
  element.addEventListener("click", () => {
    if (element == red) {
      if (count == 0) {
        count = 1;
        audio = new Audio("./believer.mp3");
        audio.play();
      } else {
        count = 0;
        audio.pause();
      }

      //   setTimeout(() => {
      //     audio.pause();
      //   }, 4000);
      // audio.pause();
    } else if (element == cyan) {
      if (count == 0) {
        count = 1;
        audio = new Audio("./mortals.mp3");
        audio.play();
      } else {
        count = 0;
        audio.pause();
      }
      //   setTimeout(() => {
      //     audio2.pause();
      //   }, 4000);
    } else if (element == voilet) {
      if (count == 0) {
        count = 1;
        audio = new Audio("./fatrat.mp3");
        audio.play();
      } else {
        count = 0;
        audio.pause();
      }
      //   setTimeout(() => {
      //     audio3.pause();
      //   }, 4000);
    }
  });
};
// console.log(getBGColor(orange));

playAudio(red);
playAudio(cyan);
playAudio(voilet);
