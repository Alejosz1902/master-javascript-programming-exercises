function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce((accumulator,currentValue) => accumulator + currentValue,0);
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
