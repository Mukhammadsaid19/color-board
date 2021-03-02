let red = document.getElementById("slideRed");
let green = document.getElementById("slideGreen");
let blue = document.getElementById("slideBlue");

let colorBox = document.getElementById("colorBox").style;
let colorValue = document.getElementById("colorValue");
let firstTint = document.getElementById("firstTint");

function calculateDarkness(hex) {
  let c = hex.substring(1);
  let rgb = parseInt(c, 16);
  let r = (rgb >> 16) & 0xff;
  let g = (rgb >> 8) & 0xff;
  let b = (rgb >> 0) & 0xff;

  return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.70
}

function decToHex(number) {
  hexNumber = parseInt(number, 10).toString(16);

  if (hexNumber.length == 1) {
    return "0" + hexNumber;
  } else {
    return hexNumber;
  }
}

function changeRGB() {
  color = `#${decToHex(red.value)}${decToHex(green.value)}${decToHex(
    blue.value
  )}`;

  colorBox.backgroundColor = color;
  colorValue.innerHTML = color;
  firstTint.style.backgroundColor = color;

  if (calculateDarkness(color) < 40) {
    colorValue.style.color = "#ffffff";
  } else {
    colorValue.style.color = "#000000";
  }

  refreshAllTiles();
}
