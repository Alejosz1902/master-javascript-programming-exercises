// Write your function here
let getLastElementOfProperty = (obj, key) => {
    if (Array.isArray(obj[key])){
        return obj[key][obj[key].length -1];
    } else {
        return undefined;
    }
}