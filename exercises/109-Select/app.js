// Write your function here
let select = (arr,obj) => {
    const result = {};
    arr.forEach(key => {
        if (obj.hasOwnProperty(key)){
            result[key]=obj[key];
        }
    });
    return result;
}