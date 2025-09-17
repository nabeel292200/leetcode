/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastword=s.trim(" ").split(" ")
    let word=lastword[lastword.length-1]
    let a=word.length
    return a
};