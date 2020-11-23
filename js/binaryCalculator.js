let result = document.getElementById('res');
let symbol = "";
let equals = 0;
function printZero() {
    result.innerHTML += "0";
}

function printOne() {
    result.innerHTML += "1";
}

function clearScreen() {
    result.innerHTML = "";
}

function sumElem() {
    symbol = "+";
    equals = parseInt(result.innerHTML,2);
    result.innerHTML += "+";
}

function subElem() {
    symbol = "-";
    equals = parseInt(result.innerHTML,2);
    result.innerHTML += "-";
}

function mulElem() {
    symbol = "*";
    equals = parseInt(result.innerHTML,2);
    result.innerHTML += "*";
}

function divElem() {
    symbol = "/";
    equals = parseInt(result.innerHTML,2);
    result.innerHTML += "/";
}

function printResult() {
    let subResult = 0;
    let operand2 = 0;
    let index = 0;
    if (symbol == '+') {
        index = (result.innerHTML).indexOf('+');
        operand2 = parseInt((result.innerHTML).substring(index + 1), 2);
        subResult = equals + operand2;
    }
    else if (symbol == '-') {
        index = (result.innerHTML).indexOf('-');
        operand2 = parseInt((result.innerHTML).substring(index + 1), 2);
        subResult = equals - operand2;
    }
    else if (symbol == '*') {
        index = (result.innerHTML).indexOf('*');
        operand2 = parseInt((result.innerHTML).substring(index + 1), 2);
        subResult = equals * operand2;
    }
    else if (symbol == '/') {
        index = (result.innerHTML).indexOf('/');
        operand2 = parseInt((result.innerHTML).substring(index + 1), 2);
        subResult = Math.floor(equals / operand2);
    }
    result.innerHTML = subResult.toString(2);
    if (result.innerHTML == 'NaN')
        result.innerHTML = '0'; 
}