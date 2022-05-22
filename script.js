//MATH FUNCTIONS
var a = null;
var b = null;
var op1 = null;
var op2 = null;
var opList = ['+','-','x','/'];
var sum = null;
var newText = '';
var isEdgeCase = false;
var digitOperand = null;
var isDigit = true;
var digList = ["0","1","2","3","4","5","6","7","8","9"];
var errorMessage = "Not a valid operation";

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

///////////////////////////////

/* 
1. Store all nodes as a variable
2. Create even listeners for all the buttons
3. Event listeners pass a number to another function that decides what operations from there
there may be more than one
maybe start with the event listener as something really simple, like an alert message
4.Start with just one digit and make an event listener for it. Alert for onclick.
*/ 

// Select all the digits and the display
// The buttons - could also grab as a button nodelist?
var buttonList = document.querySelectorAll('button'); //nodelist of all buttons

var digit1 = document.querySelector('#digit1');
var digit2 = document.querySelector('#digit2');
var digit3 = document.querySelector('#digit3');
var digit4 = document.querySelector('#digit4');
var digit5 = document.querySelector('#digit5');
var digit6 = document.querySelector('#digit6');
var digit7 = document.querySelector('#digit7');
var digit8 = document.querySelector('#digit8');
var digit9 = document.querySelector('#digit9');
var clearButton = document.querySelector('.clear');
var equalsButton = document.querySelector('.equals');
var addButton = document.querySelector('#addButton');
var subButton = document.querySelector('#subButton');
var multButton = document.querySelector('#multButton');
var divButton = document.querySelector('#divButton');

// The display
var display = document.querySelector('p'); //is a paragraph element
// All the parent divs
var container = document.querySelector('.calculator'); 
var displayDiv = document.querySelector('.display');
var digitGroup = document.querySelector('.digitGroup');
var digRow1 = document.querySelector('.digRow1');
var digRow2 = document.querySelector('.digRow2');
var digRow3 = document.querySelector('.digRow3');
var opClearEquals = document.querySelector('.opClearEquals');
var operatorGroup = document.querySelector('.operatorGroup');
var opRow1 = document.querySelector('.opRow1');
var opRow2 = document.querySelector('.opRow2');
var clearEquals = document.querySelector('.clearEquals');

////////////////////////////////////////////////////////////

// Functions
function populateDisplay(e) {
    //populate display with digit pressed
    let currentDisplayText = display.textContent;
    digitLabel = e.currentTarget.outerText;
    let textOnScreen = currentDisplayText + digitLabel;
    display.textContent = textOnScreen;
    displayDiv.appendChild(display);
    //////////////////////////////////
    //populate display with sum    n
    newDisplayText = triage(digitLabel);
    //make clear screen here bc we don't want it to automaitaclly clear//clear screen and put sum there
    if (sum) {
        display.textContent = '';
        display.textContent = newDisplayText;
        displayDiv.appendChild(display);
    }
}
function isOp(element) {
    return (opList.includes(element) ? true : false);
}
function strToNum(str) {
    return Number(str);
}
function isItDigit(digitLabel) {
    digit = strToNum(digitLabel);
    if (digit) {
        if (op1 === null) {
                op1 = digit;
            } else {
                op2 = digit;
        }
        return isDigit;
    } else {
        return false;
    }
}
function triage(digitLabel) {
    //check for digits first, because this would come before an edge case
    //then numbers, because we need to store operands first
    //only after we run out of digits/operands do we find the operation
    if (isItDigit(digitLabel)) {
        return digitLabel;
    } else if (isOp(digitLabel)) {
        if (isAnEdgeCase(digitLabel)) {
            return errorMessage;
        } else {
            sum = chooseOperation(digitLabel);
            return sum;
        }
    } else {
        return errorMessage;
    }
}
function isOp(digitLabel) {
    return opList.includes(digitLabel);
}
function isAnEdgeCase(digitLabel) {
    if (endsWithNum(digitLabel)) { //Ex: 2+=
        return isEdgeCase;
    } else if (startsWithOp(digitLabel)) { //Ex: +5=
        return isEdgeCase;
    } else if (operatorsAreClumped(digitLabel)) { //Ex: 5++2=
        return isEdgeCase;
    } else {
        return false;
    }
    return isEdgeCase;
}
function endsWithNum(digitLabel) {
    //how do you know you've reached the end?
    return false;
}
function startsWithOp(digitLabel) {
    //we know it's the beginning of the expression if sum is null.
    if (( sum === null ) && (op1 == null) && (op2 === null)) {
        return errorMessage;
    }
    return digitLabel;
}
function operatorsAreClumped(digitLabel) {
    return false;
}
function isDigit(digitLabel){
    return (digList.includes(digitLabel));
}
function chooseOperation(operator) {
    switch (operator) {
        case '+':
            return add();
        case '-':
            return sub();
        case 'x':
            return mult();
        case '/':
            return div();
        default:
            alert(`This wasn't an operator, it was {digitLabel}`);
        }
}
// Event Listeners per button //////////////////////////////

digit1.addEventListener('click', populateDisplay);
digit2.addEventListener('click', populateDisplay);
digit3.addEventListener('click', populateDisplay);
digit4.addEventListener('click', populateDisplay);
digit5.addEventListener('click', populateDisplay);
digit6.addEventListener('click', populateDisplay);
digit7.addEventListener('click', populateDisplay);
digit8.addEventListener('click', populateDisplay);
digit9.addEventListener('click', populateDisplay);
addButton.addEventListener('click', populateDisplay);
subButton.addEventListener('click', populateDisplay);
multButton.addEventListener('click', populateDisplay);
divButton.addEventListener('click', populateDisplay);
clearButton.addEventListener('click', () => {
    display.textContent = '';
    displayDiv.appendChild(display);
    //clear the relevant global variables
    operands.length = 0; //clears array
    sum = null;
});
equalsButton.addEventListener('click', populateDisplay);