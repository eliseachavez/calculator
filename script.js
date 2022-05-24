//TO DOs and EDGE CASES
/* 
8+3-4		normal
5/0		can’t divide by zero
23+5+4	tens place+ digits
23++4		double operators
+5-4		starts with operator
*/
//MATH FUNCTIONS
var op1 = [];
var op2 = [];
var operator = null;
var opList = ['+','-','x','/'];
var sum = null;
var newText = '';
var isEdgeCase = false;
var digitOperand = null;
var isDigit = true;
var digList = ["0","1","2","3","4","5","6","7","8","9"];
var errorMessage = "Not a valid operation";

function add() {
    sum = op1 + op2;
    op1 = sum;
    clear(); //the soft clear that preserves op1 for more operations , and sum
    return op1;
}

function sub() {
    sum = op1 - op2;
    op1 = sum;
    clear(); //the soft clear that preserves op1 for more operations
    return op1;
}

function mult() {
    sum = op1 * op2;
    op1 = sum;
    clear(); //the soft clear that preserves op1 for more operations
    return op1;
}

function div() {
    sum = op1 / op2;
    op1 = sum;
    clear(); //the soft clear that preserves op1 for more operations
    return op1;
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
function clear() {
    //the SOFT clear: op1 is preserved so we can stack operations
    //we also keep the current operator, bc it hasnt been used yet
    op2 = null;
    sum = null;
    newText = '';
    isEdgeCase = false;
    digitOperand = null;
    isDigit = true;
}
function numToStr(a) {
    a = a.toString;
    return a;
}
function populateDisplay(e) {
    //populate display with digit pressed
    let currentDisplayText = display.textContent;
    digitLabel = e.currentTarget.outerText;
    let textOnScreen = currentDisplayText + digitLabel;
    display.textContent = textOnScreen;
    displayDiv.appendChild(display);

    if (digitLabel === "=") {
        //clear screen
        display.textContent = "";
        displayDiv.appendChild(display);
        //then fetch and disply sum
        digitLabel = triage(digitLabel);
        display.textContent = digitLabel;
        displayDiv.appendChild(display);
    } else { //we keep what's on the screen
        digitLabel = triage(digitLabel);
        display.textContent = currentDisplayText + digitLabel;
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
        return isDigit;
    } else {
        return false;
    }
}
function triage(digitLabel) {
    //check for digits first, because this would come before an edge case
    //then numbers, because we need to store operands first
    //only after we run out of digits/operands do we find the operation
    //Kenny: change the sequence. Check variable by variable
    //e.g., check if op1 is full. if it's a digit, add to op1. is it not 
    if (isItDigit(digitLabel)) {
        if (allVariablesEmpty()) {
            op1 = Number(digitLabel);
            return digitLabel;
        } else if((op1) && (!operator)) {
            op1+= Number(digitLabel);
            return digitLabel;
        } else if ((op1) && (operator)) {
            op2 = Number(digitLabel);
            return digitLabel;
        } else if (allVariablesFilled()) {
            op2+= Number(digitLabel);
            return digitLabel;
        } else {
            return errorMessage;
        }
    } else if (isOp(digitLabel)) {
        if (allVariablesFilled() || allVariablesEmpty()) {
            return errorMessage; //only pressing = will do a calculation
        } else {
            operator = digitLabel;
            return digitLabel;
        }
    } else { //is equals
        if (allVariablesFilled()) {
            //clear the display to make room for the sum
            return chooseOperation();
            }
    }
}
function allVariablesEmpty() {
    if ((!op1) && (!op2) && (!operator)) {
        return true;
    } else {
        return false;
    }
}
function allVariablesFilled() {
    if ((op1) && (op2) && (operator)) {
        return true;
    } else {
        return false;
    }
}
function isThereAnOperator () {
    if (operator) {
        return true;
    } else {
        return false;
    }
}
function areThereTwoOperands() {
    if ((op1) && (op2)) {
        return true;
    } else {
        return false;
    }
}
function isThereOneOperator() {
    if ((op1) && !(op2)) {
        return true;
    } else {
        return false;
    }
}
function isOp(digitLabel) {
    return opList.includes(digitLabel);
}
function isAnEdgeCase(digitLabel) {
    //and two add, needs to be preceded by an operator
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
    /*if (( sum === null ) && (op1 == null) && (op2 === null)) {
        return errorMessage;
    }*/
    return false;
}
function operatorsAreClumped(digitLabel) {
    return false;
}
function isDigit(digitLabel){
    return (digList.includes(digitLabel));
}
function chooseOperation() {
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
clearButton.addEventListener('click', (e) => {
    //the HARD clear: op1 is wiped as well
    op1 = null;
    op2 = null;
    operator = null;
    opList = ['+','-','x','/'];
    sum = null;
    newText = '';
    isEdgeCase = false;
    digitOperand = null;
    isDigit = true;

    //now clear screen
    let currentDisplayText = display.textContent;
    digitLabel = e.currentTarget.outerText;
    let textOnScreen = '';
    display.textContent = textOnScreen;
    displayDiv.appendChild(display);
});
equalsButton.addEventListener('click', populateDisplay);