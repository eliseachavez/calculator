//MATH FUNCTIONS
var op1 = null;
var op2 = null;
var operator = null;
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
    //call clear?
}
function getSum(e) {
    //populate display with digit pressed
    populateDisplay(e);
    //////////////
    //don't evaluate, that's the job of equals
    //case: only use this when 
    if ((op1))
    if ((op1)&&(op2)&&(operator)) {
        newDisplayText = sum;
    }
    //populate display with sum    n
    newDisplayText = triage(digitLabel);
    //make clear screen here bc we don't want it to automaitaclly clear//clear screen and put sum there
    if (sum) {
        display.textContent = '';
        display.textContent = newDisplayText;
        displayDiv.appendChild(display);

        //now clear variables/reset, so that expression can continue if wanted
        op1 = sum;
        op2 = null;
        operater = null;
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
    //Kenny: change the sequence. Check variable by variable
    //e.g., check if op1 is full. if it's a digit, add to op1. is it not 
    if (isItDigit(digitLabel)) {
        /*
        All variables are empty. Clear sum from any history of past operations. Op1 = num and return digitLabel
        Op1 is completely empty. Op1 = num/ return digitLabel
        Op1 has a value but there is no operator. op1 += num /return digitLabel
        There is an op1 and an operator. Assign to op2 op2 = num / return digitLabel
        All variables full. Add to op2. Op2+= num/ return digitLabel
        */if (allVariablesEmpty()) {
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






        /*if(areThereTwoOperands()&& (isThereAnOperator())) {
            sum = chooseOperation(operator);
            return sum;  
        } else if (isThereOneOperator()){
            op2 = strToNum(digitLabel);
            return digitLabel;
        } else //is operator one, but is there already a number there?{
            if (op1) { //it already exists but we need to agglutinate it
                let strOperand = numToStr(digitLabel);
                strOperand+= strOperand;
                digitLabel = strToNum(strOperand);
            }
            else {
                op1 = digitLabel;
            }
            return digitLabel;
        }*/
    } else if (isOp(digitLabel)) {


        /*operator = digitLabel;
        if (isAnEdgeCase(digitLabel)) {
            return errorMessage;
        } else if (areThereTwoOperands()) {//then check that there are two operators 
            sum = chooseOperation(operator);
            return sum;
        } else {
            return digitLabel;
        }*/
    } else { //is equals
        
    }
}
function allVariablesEmpty() {
    if ((!op) && (!op2) && (!op3)) {
        return true;
    } else {
        return false;
    }
}
function allVariablesFilled() {
    if ((op) && (op2) && (op3)) {
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
function chooseOperation(operator) {
    switch (operator) {
        case '+':
            return add(op1,op2);
        case '-':
            return sub(op1,op2);
        case 'x':
            return mult(op1,op2);
        case '/':
            return div(op1,op2);
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
    op1 = null;
    op2 = null;
    operater = null;
});
equalsButton.addEventListener('click', getSum);