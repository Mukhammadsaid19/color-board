let tintSlider = document.getElementById("tintCounter");
let colorGrid = document.getElementById("colorGrid");

// generates tiles appends them when necessary based on the different of current tiles to the desired one
function generateTints() {
  let currentColor = document.getElementById("colorValue").innerText;

  let currentSliderCount = parseInt(tintSlider.value, 10);
  let currentChildrenCount = colorGrid.childElementCount;

  if (currentChildrenCount <= currentSliderCount) {
    for (let i = 0; i < currentSliderCount - currentChildrenCount; i++) {
      let colorCell = document.createElement("DIV");
      colorCell.className = "color-cell";
      let colorItem = document.createElement("DIV");
      colorItem.className = "color-item";

      colorCell.appendChild(colorItem);
      colorGrid.appendChild(colorCell);
    }
  } else {
    for (let i = 0; i < currentChildrenCount - currentSliderCount; i++) {
      colorGrid.removeChild(
        colorGrid.childNodes[colorGrid.childNodes.length - 1]
      );
    }
  }
  refreshAllTiles();
}

function refreshAllTiles() {
  let currentColor = document.getElementById("colorValue").innerText;
  let allColorTiles = document.getElementsByClassName("color-item");

  let currentFactor = 1 / allColorTiles.length;
  for (let i = 0; i < allColorTiles.length; i++) {
    allColorTiles[i].style.backgroundColor = generateTint(
      currentColor,
      currentFactor * i
    );
  }

  console.log(currentFactor);
}

function generateTint(colorValue, step) {
  let c = colorValue.substring(1);
  let rgb = parseInt(c, 16);
  let r = (rgb >> 16) & 0xff;
  let g = (rgb >> 8) & 0xff;
  let b = (rgb >> 0) & 0xff;

  let newR = generateTintComponent(r, step);
  let newG = generateTintComponent(g, step);
  let newB = generateTintComponent(b, step);

  return `#${decToHex(newR)}${decToHex(newG)}${decToHex(newB)}`;
}

function generateTintComponent(value, factor) {
  return value + factor * (255 - value);
}

function decToHex(number) {
  hexNumber = parseInt(number, 10).toString(16);

  if (hexNumber.length == 1) {
    return "0" + hexNumber;
  } else {
    return hexNumber;
  }
}
