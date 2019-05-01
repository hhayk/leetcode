/*

In an array A of 0s and 1s, how many non-empty subarrays have sum S?

Example 1:

Input: A = [1,0,1,0,1], S = 2
Output: 4
Explanation: 
The 4 subarrays are bolded below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
 

Note:

A.length <= 30000
0 <= S <= A.length
A[i] is either 0 or 1.

*/

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
    let len = A.length;
    let dp = Array(len + 1).fill(0);
    
    for (let i = 0; i < len; i++) {
        dp[i + 1] = dp[i] + A[i];
    }

    let map = new Map();
    let ret = 0;
    for (let p of dp) {
        ret += map.get(p) || 0;
        map.set(p + S, (map.get(p + S) || 0) + 1);
    }

    return ret;
};

console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));