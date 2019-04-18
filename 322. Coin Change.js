/*

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

    Input: coins = [1, 2, 5], amount = 11
    Output: 3 
    Explanation: 11 = 5 + 5 + 1


Example 2:

    Input: coins = [2], amount = 3
    Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let min_sum = Array(amount + 1).fill(Number.MAX_VALUE);
    min_sum[0] = 0;

    for (let i = 1; i < amount + 1; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                min_sum[i] = Math.min(min_sum[i], min_sum[i - coin] + 1);
            }
        }
    }

    return min_sum[amount] == Number.MAX_VALUE ? -1 : min_sum[amount];
};

console.log(coinChange([1, 2, 5], 11))