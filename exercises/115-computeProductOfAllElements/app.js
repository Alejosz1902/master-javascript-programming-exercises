function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length >0) {
  return arr.reduce((accumulator,currentValue) => accumulator*currentValue);
  } else {
    return 0;
  }
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
