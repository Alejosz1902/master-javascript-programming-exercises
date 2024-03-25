function findShortestWordAmongMixedElements(arr) {
    // your code here
    const strings = arr.filter(element => typeof element === 'string');
    if (strings.length === 0){
        return "";
    }
    let shortest = strings[0];
    for (let i=1; i<strings.length; i++){
        if(strings[i].length<shortest.length){
            shortest = strings[i];
        }
    }
    return shortest;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
