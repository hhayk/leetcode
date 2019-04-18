/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

Example 1:
    Input: candidates = [10,1,2,7,6,1,5], target = 8,
    A solution set is:
    [
        [1, 7],
        [1, 2, 5],
        [2, 6],
        [1, 1, 6]
    ]

Example 2:

    Input: candidates = [2,5,2,1,2], target = 5,
    A solution set is:
    [
        [1,2,2],
        [5]
    ]

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let map = new Map();

    let combinationSumRec = (idx, t, cc, temp) => {
        if (t == 0) {
            let copy = temp.slice();
            let hash = JSON.stringify(copy);
            map.set(hash, copy);
            return;
        }
        if (t < 0 || idx === cc.length) return;

        combinationSumRec(idx + 1, t, cc.slice(), temp);
        let ci = cc[idx];
        combinationSumRec(idx, t - ci, [...cc.slice(0, idx), ...cc.slice(idx + 1, cc.length)], [...temp, ci]);
    }

    combinationSumRec(0, target, candidates.slice(), []);
    return [...map.values()];
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));