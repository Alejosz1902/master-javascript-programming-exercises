function detectOutlierValue(string) {
    // your code here
    const arr = string.split(' ').map(Number);
    let evenCount = 0,
        oddCount = 0,
        outlierPosition;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    }
    if (evenCount > oddCount) {
    outlierPosition = arr.findIndex(num => num % 2 !== 0) + 1;
    } else {
    outlierPosition = arr.findIndex(num => num % 2 === 0) + 1;
    }
    return outlierPosition;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
