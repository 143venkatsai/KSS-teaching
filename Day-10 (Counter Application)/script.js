let counterValue = document.getElementById("counter");

function onDecrease() {
  let currentValue = parseInt(counterValue.textContent);
  if (currentValue < 0) {
    counterValue.style.color = "red";
  }
  let newValue = currentValue - 1;
  counterValue.textContent = newValue;
}

function onIncrease() {
  let currentValue = parseInt(counterValue.textContent);
  let newValue = currentValue + 1;
  if (currentValue > 0) {
    counterValue.style.color = "green";
  }
  counterValue.textContent = newValue;
  console.log(counterValue.textContent);
}

function onReset() {
  let currentValue = 0;
  counterValue.style.color = "black";
  counterValue.textContent = currentValue;
  console.log(counterValue.textContent);
}
