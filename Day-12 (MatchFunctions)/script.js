let value = Math.random() * 100;
let roundedValue = Math.round(value);
console.log(roundedValue);

let inputValue = document.getElementById("inputElement");
let message = document.getElementById("message");

function generate() {
  let guessedNumber = parseInt(inputValue.value);
  if (roundedValue > guessedNumber) {
    message.textContent = "Your guess is too low!";
    message.style.color = "red";
  } else if (roundedValue < guessedNumber) {
    message.textContent = "Your guess is too high!";
    message.style.color = "purple";
  } else if (roundedValue === guessedNumber) {
    message.textContent =
      "You guessed it! The number was " + roundedValue + ".";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid input. Please enter a number.";
  }
}
