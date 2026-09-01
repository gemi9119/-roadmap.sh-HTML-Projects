function hasMinumumLength(password){
    return password.length >= 8;
}
function hasNumber(password){
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    return password.includes(...numbers)
}
function hasUppercaseLetter(password){
    const upperCaseAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(const char of password){
        return upperCaseAlphabets.includes(char);
    }
}
function getFailedRules(password){
    let failedRules = [];
    
    if(!hasMinumumLength(password)){
        failedRules.push('minimum length');
    }
    if(!hasNumber(password)){
        failedRules.push('number');
    }
    if(!hasUppercaseLetter(password)){
        failedRules.push('uppercase letter');
    }

    return failedRules;
}
function validatePassword(password){
    const failedRules = getFailedRules(password);
    
    return {
        valid: (failedRules.length === 0),
        failedRules,
    }
}

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));


