// MATH FUNCTIONS
const add = (a = 0, b = 0) => a + b;
const subtract = (a = 0, b = 0) => a - b;
const multiply = (a = 1, b = 1) => a * b;
const divide = (a = 1, b = 1) => {
    if (b === 0) return "Err: Division by Zero";
    else return a / b;
}

// OPERATOR HANDLING
let numOne = "";
let numTwo = "";
let operator = "";

const allowedNumbers = "1234567890";
const numArray = allowedNumbers.split("");
const allowedOperators = "+-*/";
const opArray = allowedOperators.split("");

function operate(n1, n2, op) {
    let answer;
    switch (op) {
        case "+":
            answer = add(n1, n2);
            break;
        case "-":
            answer = subtract(n1, n2);
            break;
        case "*":
            answer = multiply(n1, n2);
            break;
        case "/":
            answer = divide(n1, n2);
            break;
        default:
            answer = "you tweakin twin";
    }
    return answer;
}

// HTML INTERACTION
const display = document.querySelector("div.display");
const digits = document.querySelectorAll("button.num");
const operators = document.querySelectorAll("button.operator");
const calc = document.querySelector("button.equal");
const clear = document.querySelector("button.clear");

function enableCalc() {

    function updateDisplayNum(digit) {
        let opCheck = display.textContent.split("");
        if (!opCheck.some((char) => opArray.includes(char))) {
            numOne += digit.textContent;
            display.textContent = numOne;
        } else {
            numTwo += digit.textContent;
            display.textContent += digit.textContent;
        }
        numOne = Number(numOne);
        numTwo = Number(numTwo);
    }

    digits.forEach((digit) => {
        digit.addEventListener("click", (e) => updateDisplayNum(e.target));
    });

    function updateDisplayOp(op) {
        let opCheck = display.textContent.split("");
        if (!opCheck.some((char) => opArray.includes(char))) {
            if (!opArray.includes(opCheck[opCheck.length-1])) {
                display.textContent += op.textContent;
            } else {
                opCheck.pop();
                display.textContent = opCheck.join("") + op.textContent;
            }
            operator = op.textContent;
        } else {
            calc.click();
            updateDisplayOp(op);
        }
    }

    operators.forEach((op) => op.addEventListener("click", (e) => updateDisplayOp(e.target)));

    calc.addEventListener("click", () => {
        let result = operate(numOne, numTwo, operator);
        display.textContent = result;
        numOne = result;
        numTwo = "";
    });

    clear.addEventListener("click", () => {
        numOne = 0;
        numTwo = 0;
        result = 0;
        display.textContent = "";
    });
}

enableCalc();

// after the result is diplayed,
// pressing a new digit doesn't refresh the screen