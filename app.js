//Grab Elements
const numbers = document.querySelectorAll('.btn');
const screen = document.querySelector('#screen-display');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');
const buttonHolder = document.querySelector('#buttons');
const sum = document.querySelector('#sum');
let displayValue = 0;
// Operator functions

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

// Assigning variables to two integers and one operator.
let num1;
let operator;
let num2;

// Function that evaluates calc request
function operate(num1, operator, num2) {
  return `${operator}`(num1, num2);
}

// Event Listeners

buttonHolder.addEventListener('click', (e) => {
  screen.innerText = e.target.innerText;
  displayValue = parseInt(e.target.innerText);
});
