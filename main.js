let num1 = parseInt(prompt("Enter the first number?"));
let num2 = parseInt(prompt("Enter the second number?"));

function add(a, b) {
 return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}


function divide(a,b) {
    return a / b;
}

function getNumber() {
    let num1 = parseInt(prompt("Enter the first number?"));
    let num2 = parseInt(prompt("Enter the second number?"));
    return num1, num2;
}

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));