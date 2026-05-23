function add(arg1, arg2){
    return arg1 + arg2;
}

function subtract(arg1, arg2){
    return arg1 - arg2;
}

function multiply(arg1, arg2){
    return +(arg1 * arg2).toFixed(12);
}

function divide(arg1, arg2){
    return +(arg1 / arg2).toFixed(12);
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
    // Display numbers on screen when you press the number buttons (and add to current expression)
    if(button.tagName === 'BUTTON' && !(button.classList.contains("equals")) && !(button.classList.contains("clear")) && !(button.parentElement.classList.contains("ops"))){
        currentExpression+=button.textContent;
        display.textContent = currentExpression;
    }
    // Perform operations
    else if(button.tagName === 'BUTTON' && (button.parentElement.classList.contains("ops")) && !(button.classList.contains("clear"))){
        currentOp = button.textContent;
       
        if(!currentExpression){
            return;
        }
        // Case for setting arg2 and performing op for arg1 and arg2
        if(currentArg1 && !currentArg2){
            
            currentArg2 = +currentExpression;
            currentExpression = operate(currentOp, currentArg1, currentArg2);
            display.textContent = currentExpression;
            currentArg1 = +currentExpression;
            currentArg2 = null;
            currentExpression = "";
            return;
        }
        // Case for setting arg1 and 1st op
        
        currentArg1 = +currentExpression;
        currentExpression = "";
        }

        // Calculate result of operations upon pressing equals button
    else if(button.tagName === 'BUTTON' && button.classList.contains("equals")){
        currentArg2 = +currentExpression;
       
        currentExpression = operate(currentOp, currentArg1, currentArg2);
        currentArg1 = +currentExpression;
        display.textContent = currentExpression;
        currentExpression = "";
        currentOp = null;
        
        currentArg2 = null;
    }

    // Clear all data from calculator upon pressing clear button
    else if(button.tagName === 'BUTTON' && button.classList.contains("clear")){
        currentOp = null;
        currentArg1 = null;
        currentArg2 = null;
        currentExpression = "";
        display.textContent = currentExpression;
    }
});
