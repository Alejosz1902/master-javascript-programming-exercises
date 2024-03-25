function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key])){
      return obj[key].filter(item => item%2 ==0);
    } else {
      return [];
    }
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
