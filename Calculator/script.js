const screen = document.getElementById("screen");
let expression = "";

function pressButton(value) {
    const lastChar = expression.slice(-1);

    if (isOperator(value) && isOperator(lastChar)) {
        expression = expression.slice(0, -1) + value;
    } else {
        expression += value;
    }

    screen.value = expression;
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}

function calculate() {
    if (!expression) return;

    const numbers = [];
    const operators = [];
    let currentNum = "";

    for (let char of expression) {
        if (isOperator(char)) {
            numbers.push(parseFloat(currentNum));
            operators.push(char);
            currentNum = "";
        } else {
            currentNum += char;
        }
    }
    numbers.push(parseFloat(currentNum));

    applyOperators(numbers, operators, ["*", "/"]);
    applyOperators(numbers, operators, ["+", "-"]);

    expression = numbers[0].toString();
    screen.value = expression;
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function applyOperators(numbers, operators, ops) {
    for (let i = 0; i < operators.length; i++) {
        if (ops.includes(operators[i])) {
            const result = compute(numbers[i], numbers[i + 1], operators[i]);
            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            i--;
        }
    }
}

function compute(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return b;
    }
}
