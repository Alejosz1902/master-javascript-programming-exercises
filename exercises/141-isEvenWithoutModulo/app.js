function isEvenWithoutModulo(num) {
    // your code here
    if (num ===0){
        return true;
    } else if (num < 0){
        return isEvenWithoutModulo(-num);
    }

    while (num >1) {
        num -= 2;
    }
    return num === 0;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
