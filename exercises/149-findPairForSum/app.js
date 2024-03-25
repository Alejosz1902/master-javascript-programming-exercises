function findPairForSum(array, number) {
  // your code here
  array.sort((a, b) => a - b);

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const currentSum = array[i] + array[j];

    if (currentSum === number) {
      return [array[i], array[j]];
    } else if (currentSum < number) {
      i++; 
    } else {
      j--; 
    }
  }

  return null;
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
