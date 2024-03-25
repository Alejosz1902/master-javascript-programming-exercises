function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key]) && obj[key].length > 0){
      return obj[key].reduce((accumulator,currentValue) => accumulator * currentValue,1);
    } else {
      return 0;
    }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
