let font = document.getElementById("fontFamily");
let size = document.getElementById("fontSize");
let background = document.getElementById("backgroundColor");
let textColor = document.getElementById("fontColor");
let paddingText = document.getElementById("padding");

let applyButton = document.getElementById("apply");

let cutomButton = document.getElementById("customButton");

applyButton.addEventListener("click", function () {
  let fontFamilyValue = font.value;
  let fontSizeValue = size.value;
  let backgroundColorValue = background.value;
  let fontColorValue = textColor.value;
  let paddingValue = paddingText.value;

  customButton.style.fontFamily = fontFamilyValue;
  customButton.style.backgroundColor = backgroundColorValue;
  customButton.style.fontSize = fontSizeValue;
  customButton.style.color = fontColorValue;
  customButton.style.padding = paddingValue;
});

font.addEventListener("keyup", function (event) {
  let fontFamilyValue = font.value;
  if (event.key === "Enter") {
    console.log(fontFamilyValue);
  }
});
