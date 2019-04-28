/*


Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]

*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let arr = [];

    let combinationSum3Rec = (sum, tmp) => {
        if (tmp.length > k || sum > n) return;
        if (tmp.length == k && sum == n) arr.push(tmp);

        let idx = tmp.length ? tmp[tmp.length - 1] + 1 : 1;
        for (let i = idx; i <= 9; i++) {
            combinationSum3Rec(sum + i, [...tmp, i]);
        }
    }

    combinationSum3Rec(0, [])
    return arr;
};

console.log(combinationSum3(3, 15));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(3, 9));