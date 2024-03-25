function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = '';

  function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverseString(lowerCaseWord);
  }

  for (let i = 0; i < sentence.length; i++) {
    for (let j = i + 1; j <= sentence.length; j++) {
      const substring = sentence.substring(i, j);
      if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
    const lowerCaseWord = word.toLowerCase();
    return lowerCaseWord === reverseString(lowerCaseWord);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
