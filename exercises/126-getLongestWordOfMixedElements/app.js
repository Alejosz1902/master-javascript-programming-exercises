function getLongestWordOfMixedElements(arr) {
    // your code here
    const words = arr.filter(element => typeof element === 'string');
    if (words.length === 0){
        return "";
    }
    let longest = words[0];
    for (let i=1; i<words.length; i++){
        if (words[i].lenght > longest.lenght){
            longest = words[i];
        }
    }
    return longest;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
