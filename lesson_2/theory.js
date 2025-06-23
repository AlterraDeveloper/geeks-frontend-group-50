// console.log("a = ", a); // hoisting

// document.addEventListener("DOMContentLoaded", function() {
const h1 = document.getElementById("test");

let magicNumber = Number(h1.textContent); // 100500
magicNumber += 10; // 100510
h1.textContent = magicNumber;

// var, let, const

{
  var a = 5;
  let b = 10;
  const c = [1, 2, 3];
  const d = {
    name: "Eugene",
    job: "js teacher",
  };

  d.salary = 1_000_000;

  // c.push(4);
  // c.splice(0, 1);

  // c = [];

  console.log("c = ", c);
  console.log("d = ", d);

  // c = true;
  // console.log("b = ", b);
}

// })
