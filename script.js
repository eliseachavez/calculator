//Create basic math operations: add, subtract, multiply, divide and test in browser
var a = 1;
var b = 1;
function add(a,b){
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

function operate(op, a,b) {
// don't need input validation if user restricted to what's on the buttons
    if ( op === '+') {
        return add(a,b);
    } else if ( op === '-') {
        return sub(a,b);
    } else if ( op === '*') {
        return mult(a,b);
    } else if ( op === '/') {
        return div(a,b);
    }
}

console.log(operate('+',a,b));
console.log(operate('-',a,b));
console.log(operate('*',a,b));
console.log(operate('/',a,b));