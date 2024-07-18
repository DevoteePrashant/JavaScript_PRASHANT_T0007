const resultElement = document.getElementById('resultElement');

const form = document.querySelector("form");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const sumButton = document.getElementById("sumButton");
const subtractionButton = document.getElementById("subtractionButton");
const multiplicationButton = document.getElementById("multiplicationButton");
const divisionButton = document.getElementById("divisionButton");

function sum(num1, num2) {
    if (!num1 ||!num2) {
        return "Please enter both numbers";
      }
      if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        return "Please enter valid numbers";
      }
  return parseFloat(num1) + parseFloat(num2);
}

function subtraction(num1, num2) {
    if (!num1 ||!num2) {
        return "Please enter both numbers";
      }
      if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
        return "Please enter valid numbers";
      }
  return parseInt(num1) - parseInt(num2);
}
function multiplication(num1, num2) {
    if (!num1 ||!num2) {
        return "Please enter both numbers";
      }
      if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
        return "Please enter valid numbers";
      }
  return parseInt(num1) * parseInt(num2);
}
function division(num1, num2) {
    if (!num1 ||!num2) {
        return "Please enter both numbers";
      }
      if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
        return "Please enter valid numbers";
      }
  return parseInt(num1) / parseInt(num2);
}

sumButton.addEventListener('click', (event) => {
  event.preventDefault();
  const num1 = input.value;
  const num2 = input2.value;
  const result = sum(num1, num2);
  resultElement.innerHTML = `The sum is: ${result}`;
});
subtractionButton.addEventListener('click', (event) => {
  event.preventDefault();
  const num1 = input.value;
  const num2 = input2.value;
  const result = subtraction(num1, num2);
  resultElement.innerHTML = `The sum is: ${result}`;
});
multiplicationButton.addEventListener('click', (event) => {
  event.preventDefault();
  const num1 = input.value;
  const num2 = input2.value;
  const result = multiplication(num1, num2);
  resultElement.innerHTML = `The sum is: ${result}`;
});
divisionButton.addEventListener('click', (event) => {
  event.preventDefault();
  const num1 = input.value;
  const num2 = input2.value;
  const result = division(num1, num2);
  resultElement.innerHTML = `The sum is: ${result}`;
});