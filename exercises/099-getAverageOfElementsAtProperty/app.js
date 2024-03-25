function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (Array.isArray(obj[key]) && obj[key].length > 0){
    const sum = obj[key].reduce((accumulator,currentValue)=> accumulator + currentValue,0);
    return sum/ obj[key].length;
  } else {
    return 0;
  }
}