function transformFirstAndLast(array) {
  // your code here
  let obj = {};
  if (array.length > 0){
    obj[array[0]] = array[array.length - 1];
  }
  return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
