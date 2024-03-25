function getAllElementsButNth(array, n) {
    // your code here
    const newArray = array.slice();
    newArray.splice(n,1);
    return newArray;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
