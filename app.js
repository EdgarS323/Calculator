//Grab Elements

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
let previousDisplay = document.querySelector('#previous-input');
let currentDisplay = document.querySelector('#current-input');
const clearDisplay = document.querySelector('#clear');
const deleteCharacter = document.querySelector('#delete');
const sum = document.querySelector('#sum');

// Variables for storing values
let num1 = '';
let num2 = '';
let operator = '';

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
  return a / b;
};

// Functions

const operation = (num1, operator, num2) => {
  operator(num1, num2);
};

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    num1 += e.target.innerText;
    currentDisplay.textContent = num1;
  });
});

operators.forEach((operand) => {
  operand.addEventListener('click', (e) => {});
});
