/*

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

    Input: [3, 10, 5, 25, 2, 8]

    Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let len = nums.length;
    let max = 0;

    for (let i = 0; i < len - 1; i++) {
        let num = nums[i];
        for (let j = i; j < len; j++) {
            max = Math.max(max, num ^ nums[j]);
        }
    }

    return max;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));