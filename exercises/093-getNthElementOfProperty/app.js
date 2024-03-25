// Write your function here
let getNthElementOfProperty = (obj,key,n) => {
    if(Array.isArray(obj[key]) && obj[key].length > n){
        return obj[key][n];
    } else {
        return undefined;
    }
}