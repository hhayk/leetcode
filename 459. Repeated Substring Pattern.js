/*

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

    Input: "abab"
    Output: True
    Explanation: It's the substring "ab" twice.

Example 2:

    Input: "aba"
    Output: False

Example 3:

    Input: "abcabcabcabc"
    Output: True
    Explanation: 
        It's the substring "abc" four times. (And the substring "abcabc" twice.)

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let len = s.length;

    if (len < 2) return false;
    for (let i = 1; i <= s.length / 2; i++) {
        if (s.length % i == 0 && s.slice(0, i).repeat(len / i) == s) return true;
    }

    return false;
};

console.log(repeatedSubstringPattern("abaababaab"));
console.log(repeatedSubstringPattern("aaaa"));
console.log(repeatedSubstringPattern("a"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("adbdab"));
console.log(repeatedSubstringPattern("adzadz"));
// console.log(repeatedSubstringPattern("abab"));
// console.log(repeatedSubstringPattern("aba"));
// console.log(repeatedSubstringPattern("abcabcabcabc"));