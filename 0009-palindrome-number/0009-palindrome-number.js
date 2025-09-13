/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    newStr=x.toString()
    const rev=newStr.split('').reverse().join("")
    return rev ==newStr
    
};
