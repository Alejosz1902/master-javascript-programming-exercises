// Write your function here
let getOddLengthWordsAtProperty = (obj,key) => {
    if (Array.isArray(obj[key])){
        return obj[key].filter(item => item.length%2 !== 0);
    } else {
        return [];
    }
}