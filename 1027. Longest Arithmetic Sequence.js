/*

Given an array A of integers, return the length of the longest arithmetic subsequence in A.

Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

Example 1:

    Input: [3,6,9,12]
    Output: 4
    Explanation: 
        The whole array is an arithmetic sequence with steps of length = 3.

Example 2:

    Input: [9,4,7,2,10]
    Output: 3
    Explanation: 
        The longest arithmetic subsequence is [4,7,10].

Example 3:

    Input: [20,1,15,3,10,5,8]
    Output: 4
    Explanation: 
        The longest arithmetic subsequence is [20,15,10,5].
    
Note:

2 <= A.length <= 2000
0 <= A[i] <= 10000

*/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function (A) {
    let len = A.length;
    let dp = [];
    let max = 0;

    for (let i = 0; i < len; i++) {
        dp[i] = new Map();
        for (let j = 0; j < i; j++) {
            let mapI = dp[i];
            let mapJ = dp[j];
            let diff = A[i] - A[j];

            mapI.set(diff, Math.max(
                mapI.get(diff) || 0,
                (mapJ.get(diff) || 0) + 1
            ));

            max = Math.max(max, mapI.get(diff));
        }
    }

    return max + 1;
};

console.log(longestArithSeqLength([3, 6, 9, 12]));
console.log(longestArithSeqLength([9, 4, 7, 2, 10]));
console.log(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]));