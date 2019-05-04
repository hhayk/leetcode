/*

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    // let len = nums.length;
    // let cnt = Number.MAX_VALUE;

    // let jumpRec = (idx, step) => {
    //     for (let i = nums[idx]; i > 0; i--) {
    //         let newIndex = idx + i;
    //         let newStep = step + 1;

    //         if (newIndex == len - 1) {
    //             cnt = Math.min(cnt, newStep);
    //         } else {
    //             if (newIndex < len && nums[newIndex] > 0 && newStep < cnt) {
    //                 jumpRec(newIndex, newStep);
    //             }
    //         }
    //     }
    // }

    // jumpRec(0, 0);
    // return cnt;

    let cnt = 0;
    let tmp = 0;
    let end = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        tmp = Math.max(tmp, i + nums[i]);
        if(i == end) {
            cnt++;
            end = tmp;
        }
        console.log(cnt, tmp, end)
    }

    return cnt;
};

console.log(jump([2, 3, 1, 1, 4]));
// console.log(jump([2, 1]));
// console.log(jump([5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]));
// console.log(jump([8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5]));