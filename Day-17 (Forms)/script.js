let formElement = document.getElementById("formElement");

let email = document.getElementById("email");
let password = document.getElementById("password");

let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");

email.addEventListener("blur", function (e) {
  console.log(e.target.value);
  if (e.target.value === "") {
    emailError.textContent = "Required*";
  } else {
    emailError.textContent = "";
  }
});

password.addEventListener("blur", function (e) {
  console.log(e.target.value);
  if (e.target.value === "") {
    passwordError.textContent = "Required*";
  } else {
    passwordError.textContent = "";
  }
});

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
});

// localStorage.setItem("name", "Venkat");
// localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

// sessionStorage.setItem("age", 23);

