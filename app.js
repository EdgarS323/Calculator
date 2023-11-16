//Grab Elements

const numbers = document.querySelectorAll('num');
const operators = document.querySelector('.operator');
const previousDisplay = document.querySelector('#previous-input');
const currentDisplay = document.querySelector('#current-input');
const clearDisplay = document.querySelector('#clear');
const deleteCharacter = document.querySelector('#delete');

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
