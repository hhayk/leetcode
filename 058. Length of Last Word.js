/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

    Input: "Hello World"
    Output: 5
 */

/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function (s) {
    let acc = 0;
    let right = s.length - 1;
    while (right >= 0) {
        if (s[right] == ' ') {
            if (acc > 0) return acc;
        } else {
            acc++;
        }
        right--;
    }

    return acc;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));