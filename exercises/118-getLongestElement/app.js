function getLongestElement(arr) {
    // your code here
    if (arr.length === 0){
        return "";
    }
    let longestElement = arr[0];
    for (let i =1 ; i<arr.length;i++){
        if (arr[i].length > longestElement.length){
            longestElement = arr[i];
        }
    }
    return longestElement;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
