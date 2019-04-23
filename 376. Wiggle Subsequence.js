/*

A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.

For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.

Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.

Example 1:

    Input: [1,7,4,9,2,5]
    Output: 6
    Explanation:
        The entire sequence is a wiggle sequence.

Example 2:

    Input: [1,17,5,10,13,15,10,5,16,8]
    Output: 7
    Explanation: 
        There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].

Example 3:

    Input: [1,2,3,4,5,6,7,8,9]
    Output: 2

Follow up:
Can you do it in O(n) time?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length == 0) return 0;

    let len = nums.length;
    let dp = Array(len).fill(0);

    let sign = Number.MAX_VALUE;
    dp[0] = 1;
    for (let i = 1; i < len; i++) {
        let curr = nums[i];
        let prev = nums[i - 1];

        let newSign = curr > prev ? 1 : curr < prev ? -1 : sign;
        let wiggle = sign == newSign ? 0 : 1;

        dp[i] = dp[i - 1] + wiggle;
        sign = newSign;
    }

    return dp[len - 1];
};

console.log(wiggleMaxLength([]));
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));