function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length === 0){
        return 0;
    }
    let maxLenght = arr[0].length;
    for (let i =1; i < arr.length; i++){
        if (arr[i].length > maxLenght){
            maxLenght = arr[i].length;
        }
    }
    return maxLenght;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
