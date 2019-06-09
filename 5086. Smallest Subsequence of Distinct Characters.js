/*

Return the lexicographically smallest subsequence of text that contains all the distinct characters of text exactly once.

 

Example 1:

Input: "cdadabcc"
Output: "adbc"
Example 2:

Input: "abcd"
Output: "abcd"
Example 3:

Input: "ecbacba"
Output: "eacb"
Example 4:

Input: "leetcode"
Output: "letcod"
 

Note:

1 <= text.length <= 1000
text consists of lowercase English letters.

*/

/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function (text) {
    let count = new Map();
    let seen = new Set();
    let res = []

    for (let ch of text) count.set(ch, (count.get(ch) || 0) + 1);
    for (let ch of text) {
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

console.log(smallestSubsequence("cdadabcc"));
console.log(smallestSubsequence("abcd"));
console.log(smallestSubsequence("ecbacba"));
console.log(smallestSubsequence("leetcode"));