function getStringLength(string) {
    // your code here
    let length = 0;
    while (string[length] !== undefined) {
    length++;
    }
    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5
