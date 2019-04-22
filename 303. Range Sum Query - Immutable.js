/*

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
    Given nums = [-2, 0, 3, -5, 2, -1]

    sumRange(0, 2) -> 1
    sumRange(2, 5) -> -1
    sumRange(0, 5) -> -3

Note:
    You may assume that the array does not change.
    There are many calls to sumRange function.

*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    let len = nums.length;
    let sum = Array(len).fill(0);

    sum[0] = nums[0];
    for (let i = 1; i < len; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }

    this.sum = sum;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.sum[j] - (i > 0 ? this.sum[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));