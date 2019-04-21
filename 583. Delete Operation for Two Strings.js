/*

Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
    Input: "sea", "eat"
    Output: 2

    Explanation: 
        You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = Array(word1.length + 1).fill(0).map(_ => Array(word2.length + 1).fill(0));
    for (let i = 0; i < word1.length + 1; i++) {
        for (let j = 0; j < word2.length + 1; j++) {
            if (i == 0 || j == 0) dp[i][j] = i + j;
            else if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[word1.length][word2.length];
};

console.log(minDistance("sea", "eat"));
console.log(minDistance("a", "a"));