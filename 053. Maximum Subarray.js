/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let len = nums.length;
    let arr = Array(len).fill(0);
    let max = arr[0] = nums[0];

    for (let i = 1; i < len; i++) {
        let ni = nums[i];
        arr[i] = Math.max(arr[i - 1] + ni, ni);
        max = Math.max(arr[i], max);
    }

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-2, 1]));