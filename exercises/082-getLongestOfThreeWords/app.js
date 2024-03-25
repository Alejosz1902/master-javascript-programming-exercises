function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    const newArr = [word1,word2,word3];
    let longestWord="";
    for (let word of newArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
