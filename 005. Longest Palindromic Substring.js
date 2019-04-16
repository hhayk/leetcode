/*

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.


Example 2:

Input: "cbbd"
    Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length == 0) return "";

    let maxPalindromLength = (left, right) => {
        let l = left;
        let r = right;
        while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
            l--;
            r++;
        }
        return r - l - 1;
    }

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        let v1 = maxPalindromLength(i, i);
        let v2 = maxPalindromLength(i, i + 1);
        let vv = Math.max(v1, v2);

        if (vv > end - start) {
            start = i - Math.floor((vv - 1) / 2);
            end = i + Math.floor(vv / 2);
        }
    }

    return s.substring(start, end + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));