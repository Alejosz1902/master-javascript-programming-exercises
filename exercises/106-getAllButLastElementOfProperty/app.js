function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (Array.isArray(obj[key]) && obj[key].length > 1){
      return obj[key].slice(0,-1);
    } else {
      return [];
    }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
