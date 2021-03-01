let tintsTab = document.getElementById("tintsTab");
let shadesTab = document.getElementById("shadesTab");

let tintsContent = document.getElementById("tintsContent");
let shadesContent = document.getElementById("shadesContent");

function changeTints() {
  tintsTab.className = "selected";
  shadesTab.className = "";

  tintsContent.className = "show";
  shadesContent.className = "";
}

function changeShades() {
  tintsTab.className = "";
  shadesTab.className = "selected";
  tintsContent.className = "";
  shadesContent.className = "show";
}
