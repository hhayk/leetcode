/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let hLen = haystack.length;
    let nLen = needle.length;

    if (nLen == 0) return 0;

    for (let i = 0; i < hLen; i++) {
        let k = i;
        while (i < hLen && k - i < nLen && haystack[k] == needle[k - i]) {
            k++;
            if (k - i == nLen) return i;
        }
    }
    
    return -1;
};

console.log(strStr("mississippi", "issip"));
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("aaaaa", ""));
