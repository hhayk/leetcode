/*

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

    Input: [1,2,0]
    Output: 3

Example 2:

    Input: [3,4,-1,1]
    Output: 2

Example 3:

    Input: [7,8,9,11,12]
    Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[nums[i] - 1]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else i++;
    }

    for (i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1;
    }

    return i + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, -1000, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));