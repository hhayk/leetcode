/*

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

Example 2:
    Input: A = 'abcde', B = 'abced'
    Output: false

Note:

A and B will have length at most 100.

*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length == 0 && B.length == 0) return true;

    let len = A.length;
    let i = 0;

    while (i++ < len) {
        let str = A.slice(i, len) + A.slice(0, i);
        console.log(str)
        if (str == B) return true;
    }

    return false;
};

console.log(rotateString("", ""));
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));