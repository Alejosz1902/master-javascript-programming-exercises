function flipPairs(input) {
    // your code here
    const chars = input.split("");
    for (let i=0; i<chars.length;i+=2){
        [chars[i], chars[i+1]]= [chars[i+1],chars[i]];
    }
    return chars.join("");
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
