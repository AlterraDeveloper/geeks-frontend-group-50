// const transactions = [500, 5000, 7800, 9000];

// callback -
// chaining

// const usdTransactions = transactions
//     .map(function(kgs){ return kgs / 89; })
//     .map(function(usd){ return Number(usd.toFixed(2)) })

const original = [45, 56, 12, 10, 8, 89, 63];

function NumberCircle(value) {
  const div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div; // <div class="arr"> X </div>
}

const originalHtmls = original.map(NumberCircle);

const originalContainer = document.querySelector("#original");

console.log(originalHtmls);

originalContainer.append(...originalHtmls);

const updatedContainer = document.querySelector("#updated");
const buttons = document.querySelector(".methods");

buttons.onclick = (event) => {
  const element = event.target;

  if (element.tagName !== "BUTTON") return;

  updatedContainer.innerHTML = "";

  if (element.textContent === "map +5") {
    const updated = original.map((item) => item + 5);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "map x2") {
    const updated = original.map((item) => item * 2);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "filter > 50") {
    const updated = original.filter((item) => item > 50);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "filter evens") {
    const updated = original.filter((item) => item % 2 === 0);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "slice top 3") {
    const updated = original.slice(0, 3);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "slice last 4") {
    const updated = original.slice(-4);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "reverse") {

    // how to copy array
    // const copyOriginal = original.slice();
    // const copyOriginal = original.map(x => x);
    // const copyOriginal = original.filter(x => true);
    // const copyOriginal = [...original];
    const copyOriginal = Array.from(original);

    const updated = copyOriginal.reverse();
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "sort ascending") {
    const updated = [...original].sort((a,b) => a - b);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }

  if (element.textContent === "sort descending") {
    const updated = [...original].sort((a,b) => b - a);
    const htmls = updated.map(NumberCircle);
    updatedContainer.append(...htmls);
  }
};


const array = [5, 4, 9];

console.log("Found:", array.find(x => x > 0));

