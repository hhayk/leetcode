/*

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

    Input: nums = [1,2,3]
    Output:
    [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
    ]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let len = nums.length;
    let res = [[]];

    let subsetsRec = (idx, acc) => {
        if (idx == len) return;
        for (let i = idx; i < len; i++) {
            let newAcc = [...acc, nums[i]];
            res.push(newAcc);
            subsetsRec(i + 1, newAcc);
        }
    }

    subsetsRec(0, []);
    return res;
};

console.log(subsets([1, 2, 3]))