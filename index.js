let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstNumber = null;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}



function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    firstNumber = null;
    display.value = '';
}

function calculate() {
    if (currentInput === '') {
        return;
    }

    if (firstNumber !== null) {
        let secondNumber = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                firstNumber += secondNumber;
                break;
            case '-':
                firstNumber -= secondNumber;
                break;
            case '*':
                firstNumber *= secondNumber;
                break;
            case '/':
                if (secondNumber === 0) {
                    clearDisplay();
                    display.value = 'Error';
                    return;
                }
                firstNumber /= secondNumber;
                break;
        }
        display.value = firstNumber;
        currentInput = '';
    } else {
        firstNumber = parseFloat(currentInput);
        currentInput = '';
    }
    currentOperator = '=';
}
