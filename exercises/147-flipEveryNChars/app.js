function flipEveryNChars(input, n) {
    // your code here
    let result = '';

    for (let i = 0; i < input.length; i += n) {
    let substring = input.substr(i, n);
    let reversedSubstring = substring.split('').reverse().join('');
    result += reversedSubstring;
    }
    return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
