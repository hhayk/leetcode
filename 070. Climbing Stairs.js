/*

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

    Input: 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps


Example 2:

    Input: 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // let climbStairsRec = (n, memo) => {
    //     if (n == 0) return 1;
    //     if (n < 0) return 0;

    //     if (!memo[n]) memo[n] = climbStairsRec(n - 1, memo) + climbStairsRec(n - 2, memo);
    //     return memo[n];
    // }

    // return climbStairsRec(n, []);

    let memo = new Array(n);
    memo[0] = 1;
    memo[1] = 2;

    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n - 1];
};

console.log(climbStairs(2));