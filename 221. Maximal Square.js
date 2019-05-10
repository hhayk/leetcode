/*

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0


*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length == 0) return 0;

    let rows = matrix.length;
    let cols = matrix[0].length;
    let dp = Array(rows + 1).fill(0).map(_ => Array(cols + 1).fill(0));
    let max = 0;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            if (matrix[row - 1][col - 1] == 1) {
                dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) + 1;
                max = Math.max(max, dp[row][col]);
            }
        }
    }

    return max * max;
};

console.log(maximalSquare([
    [[0]]
]));
console.log(maximalSquare([
    [[1]]
]));

console.log(maximalSquare([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]));

console.log(maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
]));

console.log(maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
]));

console.log(maximalSquare([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
]));
console.log(maximalSquare([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
]));