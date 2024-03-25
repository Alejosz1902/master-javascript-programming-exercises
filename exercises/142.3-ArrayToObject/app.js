function transformEmployeeData(array) {
  // your code here
  let transformedData = [];

  for (let i = 0; i < array.length; i++) {
    let employeeObj = {};

    for (let j = 0; j < array[i].length; j++) {
      let key = array[i][j][0];
      let value = array[i][j][1];

      employeeObj[key] = value;
    }

    transformedData.push(employeeObj);
  }

  return transformedData;
}
