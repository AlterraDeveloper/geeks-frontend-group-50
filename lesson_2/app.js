// <div class="square"></div>
function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function createField(size) {
  const appContainer = document.querySelector(".container");
  appContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const newSquare = createSquare();
    appContainer.append(newSquare);
  }
}

const squares = document.querySelectorAll(".square");

for (const square of squares) {
  square.onmouseover = function () {
    on(square);
  };
  square.onmouseleave = function () {
    off(square);
  };
}

function on(element) {
  element.style.backgroundColor = "red";
}

function off(element) {
  element.style.backgroundColor = "#555";
}

const sizesButtons = document.querySelectorAll("#sizes input[type=radio]");

for (const sizeBtn of sizesButtons) {
  sizeBtn.addEventListener("change", (event) => {
    const size = event.target.id.slice(-1).toUpperCase();
    switch (size) {
      case "S":
        createField(64);
        break;
      case "M":
        createField(128);
        break;
      case "L":
        createField(256);
        break;
    }
  });
}

sizesButtons[0].dispatchEvent(new Event("change"));
sizesButtons[0].checked = true;
