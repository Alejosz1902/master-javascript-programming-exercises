function getLargestElementAtProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key]) && obj[key].length >0){
      return Math.max(...obj[key]);
    } else {
      return [];
    }
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
