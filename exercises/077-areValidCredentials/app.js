// Write your function here
let areValidCredentials = (name,password) => {
    if (name.length > 3 && password.length >= 8){
        return true;
    } else {
        return false;
    }
}
