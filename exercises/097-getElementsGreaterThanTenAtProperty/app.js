// Write your function here
let getElementsGreaterThan10AtProperty = (obj,key) => {
    if (Array.isArray(obj[key])){
        return obj[key].filter(item => item >10);
    }else{
        return [];
    }
}