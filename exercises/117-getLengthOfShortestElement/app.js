function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length === 0){
        return 0;
    }
    let minLength = arr[0].length;
    for (let i=1; i< arr.length; i++){
        if (arr[i].length < minLength){
            minLength = arr[i].length;
        }
    }
    return minLength;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
