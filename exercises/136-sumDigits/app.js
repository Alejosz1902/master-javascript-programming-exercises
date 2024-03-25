function sumDigits(num) {
    // your code here
    const digits = Math.abs(num).toString().split("");
    const sum = digits.reduce ((acc,digit,index)=>{
        if (index === 0 && num < 0){
            return acc - parseInt(digit);
        } else{
            return acc + parseInt(digit);
        }
    },0);
    return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
