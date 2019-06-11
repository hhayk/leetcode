/*

Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let revs = nums.slice(0).reverse();

    for (let i = 1; i < nums.length; i++) {
        nums[i] *= nums[i - 1] || 1;
        revs[i] *= revs[i - 1] || 1;
    }

    return Math.max(...nums, ...revs);
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2]));