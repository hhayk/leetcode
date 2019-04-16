/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

    Input:
    [
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ]

    Output: 7
    Explanation: Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPathSum = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let board = new Array(rows).fill(0).map(_ => new Array(cols).fill(0));

    board[0][0] = grid[0][0];
    for (let row = 1; row < rows; row++) board[row][0] = board[row - 1][0] + grid[row][0];
    for (let col = 1; col < cols; col++) board[0][col] = board[0][col - 1] + grid[0][col];

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            board[row][col] = Math.min(board[row][col - 1], board[row - 1][col]) + grid[row][col];
        }
    }

    return board[rows - 1][cols - 1];
};

console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));
console.log(minPathSum([
    [1, 2],
    [5, 6],
    [1, 1]
]));