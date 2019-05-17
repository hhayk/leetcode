/*

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let arr = Array(S.length).fill(0);

    let prevIdx = -10001
    let nextIdx = S.indexOf(C);

    for (let i = 0; i < S.length; i++) {
        if (i == nextIdx) {
            prevIdx = nextIdx;
            nextIdx = S.indexOf(C, i + 1);
        } else {
            arr[i] = Math.min(i - prevIdx, Math.abs(nextIdx - i, 0));
        }
    }

    return arr;
};

console.log(shortestToChar("loveleetcode", "e"));
console.log(shortestToChar("aaba", "b"));