/*

Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"

*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let r = [...s].reverse().join("");
    let len = s.length;

    for (let i = 0; i < len; i++) {
        if (r.slice(i) == s.slice(0, len - i)) {
            return r.slice(0, i) + s;
        }
    }

    return "";
};

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));