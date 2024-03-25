function computePerimeterOfARectangle(length, width) {
  // your code here
  const perimeter = length*2 + width*2;
  return perimeter;
}

let output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
