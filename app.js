//Grab Elements

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
let previousDisplay = document.querySelector('#previous-input');
let currentDisplay = document.querySelector('#current-input');
const clearButton = document.querySelector('#clear');
const deleteCharacter = document.querySelector('#delete');
const sum = document.querySelector('#sum');

// Variables for storing values
let num1 = '';
let num2 = '';
let operator = '';
let operatorClicked = false;

// Calculator Operations

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
};

// Functions

function operate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case 'multiply':
      return multiply(num1, num2);
    case 'divide':
      return divide(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'add':
      return add(num1, num2);
    default:
      return 'Error';
  }
}

function deleteChar() {
  currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
}

function clearDisplay() {
  currentDisplay.textContent = '';
  previousDisplay.textContent = '';
  num1 = '';
  num2 = '';
  operator = '';
  operatorClicked = false;
}
//Event Listeners

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (operatorClicked) {
      previousDisplay.textContent = currentDisplay.textContent;
      currentDisplay.textContent = e.target.innerText;
      operatorClicked = false;
    } else {
      currentDisplay.textContent += e.target.innerText;
    }
  });
});

operators.forEach((operand) => {
  operand.addEventListener('click', (e) => {
    if (num1 === '') {
      num1 = currentDisplay.innerText;
    } else {
      num2 = currentDisplay.innerText;
    }
    previousDisplay.textContent = currentDisplay.textContent;
    currentDisplay.textContent = e.target.innerText;
    switch (e.target.innerText) {
      case 'x':
        operator = 'multiply';
        break;
      case '/':
        operator = 'divide';
        break;
      case '-':
        operator = 'subtract';
        break;
      case '+':
        operator = 'add';
        break;
      default:
        console.log('You should never be seeing this');
    }
    operatorClicked = true;
    console.log('num1', num1);
    console.log('num2', num2);
  });
});

//Calculating the sum function
sum.addEventListener('click', () => {
  previousDisplay.textContent = '';
  num2 = currentDisplay.textContent;
  currentDisplay.textContent = operate(num1, operator, num2);
});

// Function to Reset Display & Variables

clearButton.addEventListener('click', clearDisplay);

// Delete One character function

deleteCharacter.addEventListener('click', deleteChar);
