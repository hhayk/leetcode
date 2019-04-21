/*

Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

    Input: [1, 5, 11, 5]

    Output: true

    Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

    Input: [1, 2, 3, 5]

    Output: false

    Explanation: The array cannot be partitioned into equal sum subsets.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let len = nums.length;
    let sum = 0;

    for (let num of nums) sum += num;
    if (sum & 1 == 1) return false;
    sum = sum / 2;

    let dp = Array(len + 1).fill(false).map(_ => Array(sum + 1).fill(false));

    for (let i = 0; i < len + 1; i++) dp[i][0] = true;
    for (let i = 1; i < len + 1; i++) {
        for (let j = 1; j < sum + 1; j++) {
            if (j < nums[i - 1]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }

    return dp[len][sum];
};

console.log(canPartition([1, 2, 5]));
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([1]));
console.log(canPartition([1, 3, 4, 4]));