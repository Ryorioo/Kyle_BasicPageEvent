// ----- Element selection (event sources) -----
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// ----- Store original values so Reset can restore them -----
const originalHeadingText = mainHeading.textContent;
const originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

// A small palette to cycle through for the "Change Background" button
const backgroundColors = ["#dff9fb", "#ffeaa7", "#fab1a0", "#a29bfe", "#81ecec"];
let colorIndex = 0;

// Handler: Display Greeting
// Event: click | Source: greetingButton
function handleGreetingClick() {
  const name = nameInput.value.trim();

  if (name === "") {
    // Handle empty input case
    messageArea.textContent = "Please enter your name before requesting a greeting.";
    console.log("Greeting button clicked with empty input.");
    return;
  }

  mainHeading.textContent = `Hello, ${name}!`;
  messageArea.textContent = `Greeting displayed for "${name}".`;
  console.log(`Greeting button clicked. Heading updated for: ${name}`);
}

// Handler: Change Background
// Event: click | Source: backgroundButton
function handleBackgroundClick() {
  colorIndex = (colorIndex + 1) % backgroundColors.length;
  const newColor = backgroundColors[colorIndex];

  document.body.style.backgroundColor = newColor;
  messageArea.textContent = `Background color changed to ${newColor}.`;
  console.log(`Background button clicked. New background color: ${newColor}`);
}

// Handler: Reset
// Event: click | Source: resetButton
function handleResetClick() {
  mainHeading.textContent = originalHeadingText;
  nameInput.value = "";
  document.body.style.backgroundColor = originalBackgroundColor;
  messageArea.textContent = "";
  colorIndex = 0;

  console.log("Reset button clicked. Page restored to original state.");
}

// Handler: Live input display
// Event: input | Source: nameInput
function handleNameInput(event) {
  const currentText = event.target.value;

  if (currentText === "") {
    messageArea.textContent = "";
  } else {
    messageArea.textContent = `You are typing: ${currentText}`;
  }

  console.log(`Input event fired. Current value: "${currentText}"`);
}

// Handler: Mouseover logging
// Event: mouseover | Source: each button
function handleButtonMouseover(event) {
  const buttonLabel = event.target.id;
  console.log(`The mouse is over the ${buttonLabel}.`);
}

// ----- Attach event listeners (listeners connect sources to handlers) -----
greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleNameInput);

// Mouseover event attached to all three buttons
greetingButton.addEventListener("mouseover", handleButtonMouseover);
backgroundButton.addEventListener("mouseover", handleButtonMouseover);
resetButton.addEventListener("mouseover", handleButtonMouseover);

// Initial debug log to confirm the script has loaded
console.log("script.js loaded. Event listeners attached.");