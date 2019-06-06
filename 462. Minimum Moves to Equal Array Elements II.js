/*

Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.

You may assume the array's length is at most 10,000.

Example:

Input:
[1,2,3]

Output:
2

Explanation:
Only two moves are needed (remember each move increments or decrements one element):

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    
    let midVal = nums[~~(nums.length / 2)];
    let cnt = 0;
    for (let num of nums) {
        cnt += Math.abs(num - midVal);
    }

    return cnt;
};

console.log(minMoves2([1, 2, 3]));