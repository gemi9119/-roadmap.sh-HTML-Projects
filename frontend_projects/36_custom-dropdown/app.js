var isPalindrome = function(x) {
    // return String(x).split('').reverse().join('') === String(x);
    let original = Number(x);
    let reverse = 0;
    while(original>0){
        let lastdig = original%10;
        reverse = reverse*10+lastdig;
        original = Math.floor(original/10);
    }
    return x === reverse;
};

console.log(isPalindrome(909))

