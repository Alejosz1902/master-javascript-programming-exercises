function getAllLetters(str) {
    // your code here
    const newArr = str.split("");
    return newArr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
