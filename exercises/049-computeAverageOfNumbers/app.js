// Write your function here
let computeAverageOfNumbers = (input) => {
    if (input.length === 0){
        return 0;
    }
    const sum = input.reduce((acc,num) => acc + num,0);
    const average = sum/input.length;
    return average;
}