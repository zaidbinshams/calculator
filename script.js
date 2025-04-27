// MATH FUNCTIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "Err: Division by Zero";
    else return a / b;
}

// USER INPUT
let numOne;
let numTwo;
let operator;

switch (operator) {
    case "+":
        add(numOne, numTwo);
        break;
    case "-":
        subtract(numOne, numTwo);
        break;
    case "*":
        multiply(numOne, numTwo);
        break;
    case "/":
        divide(numOne, numTwo);
        break;
    default:
        return "you tweakin twin";
}