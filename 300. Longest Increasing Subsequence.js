/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

    Input: [10,9,2,5,3,7,101,18]
    Output: 4 
    Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
    Note:

    There may be more than one LIS combination, it is only necessary for you to return the length.
    Your algorithm should run in O(n2) complexity.
    Follow up: Could you improve it to O(n log n) time complexity?
 */

/**
* @param {number[]} nums
* @return {number}
*/
var lengthOfLIS = function (nums) {
    let len = nums.length;
    if (len == 0) return 0;

    let memo = new Array(len);
    memo[0] = 1;
    let ret = 1;
    for (let i = 1; i < len; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(max, memo[j])
            }
        }
        memo[i] = max + 1;
        ret = Math.max(ret, memo[i]);
    }

    return ret;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));