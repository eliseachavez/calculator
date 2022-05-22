//MATH FUNCTIONS
var a = null;
var b = null;
var c = [];
var operands = []; //takes every digit pressed as an input, e.g. [1,+,2, ]
var opList = ['+','-','x','/'];
var sum = null;
var alternate = true;
var newText = '';
var isEdgeCase = false;
var digitOperand = null;
var isDigit = false;
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
    //clear screen and put sum there
    display.textContent = '';
    display.textContent = newDisplayText;
    displayDiv.appendChild(display);
}
function isNum(element) {
   return (Number(element) ? true : false); //automatically converts string numbers to numbers
}
function isOp(element) {
    return (opList.includes(element) ? true : false);
}
function arrToString(arr) {
    return arr.join('');
}
function strToArr(str) {
    //8+57+14++=
    //+8-32+14=
    //8+-4=
    let reg =  /[+-x\/]/;
    str.replace('/[+-x/]]/', ',');
    str.split(',');
    str.pop();
    return str.replace('/[+-x/]]/', ',').split(',').pop; //replace operators with one single character,
    // the comma. the turn to array using comma as delimiter
    //pop removes the =
}
function strToNum(str) {
    return Number(str);
}
function triage(digitLabel) {
    //check for digits first, because this would come before an edge case
    //then numbers, because we need to store operands first
    //only after we run out of digits/operands do we find the operation
    switch(digitLabel) {
        case isDigit(digitLabel):
            if (op1 === null) {
                op1 = strToNum(digitLabel);
            } else {
                op2 = strToNum(digitLabel);
            }
            break;
        case isOp(digitLabel):
            if (isAnEdgeCase(digitLabel)) {
                return errorMessage;
            } else {
                return chooseOperation(digitLabel);
            }
    }
}
function isOp {
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
}
function startsWithOp(digitLabel) {

}
function operatorsAreClumped(digitLabel) {

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