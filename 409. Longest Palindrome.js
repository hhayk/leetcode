/*

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

    Input:
    "abccccdd"

    Output:
    7

Explanation:
    One longest palindrome that can be built is "dccaccd", whose length is 7.

*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let aCharCode = 'A'.charCodeAt(0);
    let len = 'z'.charCodeAt(0) - aCharCode;
    let arr = Array(len + 1).fill(0);

    [...s].forEach(ch => {
        let idx = ch.charCodeAt(0) - aCharCode;
        arr[idx]++;
    })

    let oddAlowed = 1;
    let sum = 0;
    arr.forEach(a => {
        if (a % 2 == 0 || oddAlowed-- > 0) sum += a;
        else sum += a - 1;
    })
    return sum;
};

console.log(longestPalindrome("zeusnilemacaronimaisanitratetartinasiaminoracamelinsuez"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("abccccdd"));