/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

    Input: m = 3, n = 2
    Output: 3
    Explanation:
    From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
    1. Right -> Right -> Down
    2. Right -> Down -> Right
    3. Down -> Right -> Right

Example 2:

    Input: m = 7, n = 3
    Output: 28

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // if (m == 1 && n == 1) return 1;
    // let sum = 0;

    // let uniquePathsRec = (row, col, dir) => {
    //     if (row == m || col == n) return;
    //     if (row == m - 1 && col == n - 1) sum += 1;
    //     else {
    //         uniquePathsRec(row + 1, col);
    //         uniquePathsRec(row, col + 1);
    //     }
    // }

    // uniquePathsRec(1, 0);
    // uniquePathsRec(0, 1);
    // return sum; 

    let board = new Array(n).fill(0).map(arr => new Array(m).fill(0));

    for (let col = 0; col < m; col++) {
        for (let row = 0; row < n; row++) {
            if (row == 0 || col == 0) {
                board[row][col] = 1;
                continue;
            }
            board[row][col] = board[row - 1][col] + board[row][col - 1];
        }
    }

    return board[n - 1][m - 1];
}


console.log(uniquePaths(1, 1));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));