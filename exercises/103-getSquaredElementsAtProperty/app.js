function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key])){
      return obj[key].map(item => item*item);
    } else {
      return [];
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
