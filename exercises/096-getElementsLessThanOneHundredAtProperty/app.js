// Write your function here
let getElementsLessThan100AtProperty = (obj,key) => {
    if (Array.isArray(obj[key])){
        return obj[key].filter(item => item < 100);
    } else {
        return [];
    }
}