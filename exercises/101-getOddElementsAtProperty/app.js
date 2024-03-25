function getOddElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key])){
      return obj[key].filter(element => element % 2 !== 0);
    } else {
      return [];
    }
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
