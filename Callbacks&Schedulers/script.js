// let counter = document.getElementById("counter");
// let start = document.getElementById("start");
// let stop = document.getElementById("stop");

// start.addEventListener("click", function () {
//   let interval = setInterval(function () {
//     let value = parseInt(counter.textContent);
//     value++;
//     counter.textContent = value;
//   }, 2000);
//   stop.addEventListener("click", function () {
//     clearInterval(interval);
//   });
// });

let bgContainer = document.getElementById("bg-container");

let colors = [
  "#323f4b",
  "#000000",
  "#4287f5",
  "#32bfa5",
  "#f00ca4",
  "#50cc31",
  "#b85d12",
];

function change() {
  let random = Math.floor(Math.random() * colors.length);
  console.log(colors[random]);
  bgContainer.style.backgroundColor = colors[random];
}
