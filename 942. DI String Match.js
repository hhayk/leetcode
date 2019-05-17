/*

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]
 

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]
 

Note:

1 <= S.length <= 10000
S only contains characters "I" or "D".

*/

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let len = S.length;
    let arr = Array(len + 1).fill(0);

    let low = 0;
    let high = len;
    for (let i = 0; i < len; i++) {
        arr[i] = S[i] == "I" ? low++ : high--;
    }
    arr[len] = low;

    return arr;
};

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));