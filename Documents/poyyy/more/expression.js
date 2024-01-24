// approach 1
const basicOp = (operation,value1,value2) => {
    return operation === '+' ? value1+value2 :
        operation === '-' ? value1-value2 :
        operation === '*' ? value1*value2 : 
        value1/value2
}// don't forget to return



// approach 2
function basicOp(o, a, b) {
    return eval(a+o+b);
} // eval() used to evaluate a string as if it were JavaScript code.


// approach 3
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


console.log(basicOp('+',5,6)) //5+6
console.log(basicOp('-',5,6)) //5-6
console.log(basicOp('*',8,0)) //8*0
console.log(basicOp('/',6,3)) //6/3