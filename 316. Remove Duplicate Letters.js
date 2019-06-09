/*

Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: "bcabc"
Output: "abc"
Example 2:

Input: "cbacdcbc"
Output: "acdb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let count = new Map();
    let seen = new Set();
    let res = []

    for (let ch of s) count.set(ch, (count.get(ch) || 0) + 1);
    for (let ch of s) {
        count.set(ch, count.get(ch) - 1);
        if (seen.has(ch)) continue;

        while (res.length && ch < res[res.length - 1] && count.get(res[res.length - 1]) > 0) {
            seen.delete(res.pop());
        }

        res.push(ch);
        seen.add(ch);
    }

    return res.join("");
};

console.log(removeDuplicateLetters("bcabc"))
console.log(removeDuplicateLetters("cbacdcbc"))