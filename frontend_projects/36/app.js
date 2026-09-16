var isPalindrome = function(x) {
    return String(x).split('').reverse().join('') === String(x);
};

console.log(isPalindrome(-121));
