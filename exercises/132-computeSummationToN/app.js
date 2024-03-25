function computeSummationToN(n) {
  // your code here
  let sum = 0;
  for (let i=n;i>=0;i--){
    sum += i;
  }
  return sum;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

