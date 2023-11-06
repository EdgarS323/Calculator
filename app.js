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
  return operator(num1, num2);
}
