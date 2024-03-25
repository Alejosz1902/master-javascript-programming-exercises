// Write your function here
let countAllCharacters = (str) => {
    const charCount ={};
    for (let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}