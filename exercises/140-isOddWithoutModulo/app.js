function isOddWithoutModulo(num) {
    // your code here
    if (num === 0){
        return false;
    } else if (num < 0) {
        return isOddWithoutModulo(-num);
    }
    while (num >1){
        num -= 2;
    }
    return num ===1;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
