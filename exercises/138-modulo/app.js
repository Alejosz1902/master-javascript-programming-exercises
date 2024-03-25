function modulo(num1, num2) {
    // your code here
    if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }
    
    if (num2 === 0) {
        return NaN;
    }
    
    if (num1 === 0) {
        return 0;
    }
    
    let remainder = Math.abs(num1);
    const divisor = Math.abs(num2);
    
    while (remainder >= divisor) {
        remainder -= divisor;
    }
    
    return num1 < 0 ? -remainder : remainder;
}


let output = modulo(25, 4);
console.log(output); // --> 1
