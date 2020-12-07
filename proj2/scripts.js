const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

var getBGColor = (color) => {
    return window.getComputedStyle(color).backgroundColor;
}


// var redElementColor = getBGColor(red);

// orange.addEventListener("click", () => {
//     center.style.backgroundColor = redElementColor;
// });

const colorChanger = (element, color) => {
    element.addEventListener("mouseover", () => {
        center.style.background = color;
    });
}




colorChanger(red, getBGColor(orange));
colorChanger(cyan, getBGColor(cyan));
colorChanger(voilet, getBGColor(voilet));
colorChanger(orange, getBGColor(orange));
colorChanger(pink, getBGColor(pink));



// console.log(getBGColor(orange));
