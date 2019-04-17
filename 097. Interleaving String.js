/*

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
    Output: true

Example 2:

    Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
    Output: false

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false;

    let len1 = s1.length + 1;
    let len2 = s2.length + 1;
    let dp = new Array(len1).fill(false).map(_ => new Array(len2).fill(false));

    dp[0][0] = true;
    for (let row = 1; row < len1; row++) dp[row][0] = dp[row - 1][0] && s1[row - 1] === s3[row - 1];
    for (let col = 1; col < len2; col++) dp[0][col] = dp[0][col - 1] && s2[col - 1] === s3[col - 1];


    for (let row = 1; row < len1; row++) {
        for (let col = 1; col < len2; col++) {
            dp[row][col] =
                (dp[row - 1][col] && s3[row + col - 1] === s1[row - 1]) ||
                (dp[row][col - 1] && s3[row + col - 1] === s2[col - 1]);
        }
    }

    return dp[len1 - 1][len2 - 1];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));