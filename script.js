//Create basic math operations: add, subtract, multiply, divide and test in browser
let a = 1;
let b = 1;
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
let opList = ['+', '-', '*', '/'];
    for (op in opList) {
        if ( op === '+') {
            add(a,b);
        } else if ( op === '-') {
            sub(a,b);
        } else if ( op === '*') {
            mult(a,b);
        } else if ( op === '/') {
            div(a,b);
        }
    }
}

console.log(add(a,b));
console.log(sub(a,b));
console.log(mult(a,b));
console.log(div(a,b));
