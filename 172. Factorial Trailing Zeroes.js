/*

Given an integer n, return the number of trailing zeroes in n!.

Example 1:

    Input: 3
    Output: 0
        Explanation: 3! = 6, no trailing zero.

Example 2:

    Input: 5
    Output: 1
        Explanation: 5! = 120, one trailing zero.

Note: Your solution should be in logarithmic time complexity.

*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // let memo = { 0: 1, 1: 1 };
    // let factorial = (n) => memo[n] ? memo[n] : memo[n] = factorial(n - 1) * n;

    // let cnt = 0;
    // let fct = factorial(n);
    // while (fct % 10 == 0) {
    //     cnt++;
    //     fct /= 10;
    // }

    // return cnt;

    let cur = 5;
    let total = 0;

    while (cur <= n) {
        total += Math.floor(n / cur);
        cur *= 5;
    }

    return total;
};

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
console.log(trailingZeroes(10));
console.log(trailingZeroes(1808548329));