// Write your function here
let getElementsThatEqual10AtProperty = (obj,key) => {
    if (Array.isArray(obj[key])) {
        return obj[key].filter(element => element ===10);
    } else {
        return [];
    }
}