function add(arg1, arg2){
    return arg1 + arg2;
}

function subtract(arg1, arg2){
    return arg1 - arg2;
}

function multiply(arg1, arg2){
    return arg1 * arg2;
}

function divide(arg1, arg2){
    return arg1 / arg2;
}

function operate(op, arg1, arg2){
    switch (op){
        case '+':
            return add(arg1, arg2);
            break;
        case '-':
            return subtract(arg1, arg2);
            break;
        case '*':
            return multiply(arg1, arg2);
            break;
        case '/':
            return divide(arg1, arg2);
            break;
    }
}

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const allButtons = document.querySelector(".allButtons");
const clear = document.querySelector("#clear");

let currentExpression = "";
let currentOp = null;
let currentArg1 = null;
let currentArg2 = null;

display.textContent = currentExpression;

allButtons.addEventListener("click", (e) => {
    const button = e.target;
    if(button.tagName === 'BUTTON' && !(button.classList.contains("equals")) && !(button.classList.contains("clear")) && !(button.parentElement.classList.contains("ops"))){
        currentExpression+=button.textContent;
        display.textContent = currentExpression;
        console.log(`currentExpression: ${currentExpression}`);
    }
    else if(button.tagName === 'BUTTON' && (button.parentElement.classList.contains("ops")) && !(button.classList.contains("clear"))){
        currentOp = button.textContent;
        currentArg1 = +currentExpression;
        currentExpression = "";
        console.log(`currentArg1: ${currentArg1}`);
        }
    else if(button.tagName === 'BUTTON' && button.classList.contains("equals")){
        currentArg2 = +currentExpression;
        console.log(`currentArg2: ${currentArg2}`);
        currentExpression = operate(currentOp, currentArg1, currentArg2);
        console.log(`Expression after operation: ${currentExpression}`);
        display.textContent = currentExpression;
    }

    else if(button.tagName === 'BUTTON' && button.classList.contains("clear")){
        currentOp = null;
        currentExpression = "";
        display.textContent = currentExpression;
    }
});
