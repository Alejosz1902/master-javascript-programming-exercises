function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    const words=[word1,word2,word3];
    let shortestWord =words[0];
    for (let i=1; i<words.length;i++){
        if (words[i].length<shortestWord.length){
            shortestWord = words[i];
        }
    }
    return shortestWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
