function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key]) && obj[key].length > 0){
        return obj[key].reduce((accumulator,currentValue)=>accumulator+currentValue,0);
    } else {
        return 0;
    }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
