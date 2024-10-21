console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
// variable result wird erstellt, aber noch kein Wert zugewiesen -> fungiert als Platzhalter; kann später genutzt werden, um das Ergebnis der Berechnung zu speochern
  let result;

  // --v-- write your code here --v--
//zunächst Daten aus dem Formular verfügbar machen/anwählen
const formData= new FormData(event.target)
const data = Object.fromEntries(formData);
//converting stringvalue input to numbers
const numberA = Number(data.numberA);
const numberB = Number(data.numberB);
const operator = data.operator;

//check which operator is selected and perform the corresponding mathematical operation (use the value here to identify)
if (operator === "addition"){
 result = add(numberA, numberB);
}
if (operator === "subtraction"){
  result = subtract(numberA, numberB);
}
if (operator === "multiplication"){
  result = multiply(numberA, numberB);
}
if (operator === "division"){
  result = divide(numberA, numberB);
}
  // --^-- write your code here --^--
// updates the text content of the resultOutput element -Y displays the value stored in result
  resultOutput.textContent = result;
});
