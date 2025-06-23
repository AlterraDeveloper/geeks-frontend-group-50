// DOM - Document Object Model

// const me = {
//     name: "Evgeniy",
//     surname: "Kiselev",
//     salary: 1_000_000
// }

const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const greenButton = document.querySelector("#green");
const commandText = document.querySelector("#command");

function turnRed() {
  commandText.textContent = "STOP";
  commandText.style.color = "red";
  redButton.classList.add("active");
  yellowButton.classList.remove("active");
  greenButton.classList.remove("active");
}

redButton.addEventListener("click", turnRed);

function turnYellow() {
  commandText.textContent = "WAIT";
  commandText.style.color = "yellow";
  yellowButton.classList.add("active");
  redButton.classList.remove("active");
  greenButton.classList.remove("active");
}

yellowButton.addEventListener("click", turnYellow);

function turnGreen(){
    commandText.textContent = "GO";
    commandText.style.color = "green";
    greenButton.classList.add("active");
    redButton.classList.remove("active");
    yellowButton.classList.remove("active");
}

greenButton.onclick = turnGreen;


