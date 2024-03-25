function isIsogram(text) {
  // your code here
  const lowercaseStr = text.toLowerCase();

  const charSet = new Set();

  for (let char of lowercaseStr) {
      if (charSet.has(char)) {
          return false;
      }
      charSet.add(char);
  }

  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
