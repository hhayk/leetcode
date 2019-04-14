/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let len = nums.length;
    let zeroCount = 0;
    for (let i = 0; i < len - zeroCount; i++) {
        if (nums[i] === 0) {
            nums.push(...nums.splice(i, 1));
            i--;
            zeroCount++;
        }
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));