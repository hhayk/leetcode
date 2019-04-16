/*

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character


Example 1:

Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
        horse -> rorse (replace 'h' with 'r')
        rorse -> rose (remove 'r')
        rose -> ros (remove 'e')


Example 2:

    Input: word1 = "intention", word2 = "execution"
    Output: 5

    Explanation: 
        intention -> inention (remove 't')
        inention -> enention (replace 'i' with 'e')
        enention -> exention (replace 'n' with 'x')
        exention -> exection (replace 'n' with 'c')
        exection -> execution (insert 'u')

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let len1 = word1.length + 1;
    let len2 = word2.length + 1;
    let dp = new Array(len1).fill(0).map(_ => new Array(len2).fill(0));

    for (let i = 0; i < len1; i++) dp[i][0] = i;
    for (let j = 0; j < len2; j++) dp[0][j] = j;

    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (word1[i - 1] == word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        }
    }

    return dp[len1 - 1][len2 - 1];
};

console.log(minDistance("", "ros"));
console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));