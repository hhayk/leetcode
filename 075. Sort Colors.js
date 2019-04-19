/*

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

    Input: [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]

Follow up:

    A rather straight forward solution is a two-pass algorithm using counting sort.
    First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
    Could you come up with a one-pass algorithm using only constant space?

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0, k = 0; k < nums.length; i++ , k++) {
        if (nums[i] == 2) {
            nums.splice(i, 1);
            nums.push(2);
            i--;
        } else if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        }
    }

    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([1, 2, 0]));
console.log(sortColors([2, 0, 2, 1, 1, 0]));