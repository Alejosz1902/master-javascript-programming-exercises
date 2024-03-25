function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  const numbers = arr.filter(element => typeof element === 'number');
  if (numbers.length == 0){
    return 0;
  }
  let smallest = numbers[0];
  for (let i=1; i<numbers.length;i++){
    if (numbers[i]<smallest){
      smallest = numbers[i];
    }
  }
  return smallest;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
