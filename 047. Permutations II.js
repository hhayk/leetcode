/*

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let ret = new Map();
    let len = nums.length;

    let permuteRec = (reservetion, tmp) => {
        if (reservetion.length == len) {
            ret.set(JSON.stringify(tmp), tmp);
        } else {
            for (let i = 0; i < len; i++) {
                if (reservetion.indexOf(i) != -1) continue;

                permuteRec([...reservetion, i], [...tmp, nums[i]]);
            }
        }
    }

    for (let i = 0; i < len; i++) permuteRec([i], [nums[i]]);

    return [...ret.values()];
};

console.log(permuteUnique([1, 1, 2]));