function getLargestNumberAmongMixedElements(arr) {
    // your code here
    const numbers = arr.filter(element => typeof element === "number");
    if (numbers.length === 0){
        return 0;
    }
    let largest = numbers[0];
    for (let i=1;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
