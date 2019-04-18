/*

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

    Input: [2,3,1,1,4]
    Output: true
    Explanation: 
        Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

    Input: [3,2,1,0,4]
    Output: false
    Explanation: 
        You will always arrive at index 3 no matter what. Its maximum
                jump length is 0, which makes it impossible to reach the last index.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // -1->unknown 0->bad 1->good
    let len = nums.length;
    let memo = Array(len).fill(-1);
    memo[len - 1] = 1;

    let canJumpRec = (idx) => {
        if (memo[idx] != -1) return memo[idx] == 1;

        let maxJump = Math.min(idx + nums[idx], len - 1);
        for (let i = idx + 1; i <= maxJump; i++) {
            if (canJumpRec(i)) {
                memo[i] = 1;
                return true;
            }
        }

        memo[idx] = 0;
        return false;
    }

    return canJumpRec(0);
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))