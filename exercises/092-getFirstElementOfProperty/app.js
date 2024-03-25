// Write your function here
let getFirstElementOfProperty = (obj,key) =>{
    if (Array.isArray(obj[key]) && obj[key].length >0){
        return obj[key][0];
    }else{
        return undefined;
    }
}