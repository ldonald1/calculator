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
            add(arg1, arg2);
            break;
        case '-':
            subtract(arg1, arg2);
            break;
        case '*':
            multiply(arg1, arg2);
            break;
        case '/':
            divide(arg1, arg2);
            break;
    }
}

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const allButtons = document.querySelector(".allButtons");
const clear = document.querySelector("#clear");

let currentExpression = "";

display.textContent = currentExpression;

allButtons.addEventListener("click", (e) => {
    const button = e.target;
    if(button.tagName === 'BUTTON' && !(button.classList.contains("equals")) && !(button.classList.contains("clear"))){
        currentExpression+=button.textContent;
        display.textContent = currentExpression;
    }
    else if(button.tagName === 'BUTTON' && button.classList.contains("equals")){
        /*
        operate()
        currentExpression+=button.textContent;
        display.textContent = currentExpression;
        */
    }

    else if(button.tageName === 'BUTTON' && button.classList.contains("clear")){
        currentExpression = "";
        display.textContent = currentExpression;
    }
});
