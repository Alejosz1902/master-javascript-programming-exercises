function addToBackOfNew(arr, element) {
    // your code here
    return [...arr,element];
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
