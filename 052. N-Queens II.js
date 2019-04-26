/*

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.



Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

    Input: 4
    Output: 2

Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let isSafe = (row, col, board) => {
        for (let c = 0; c < col; c++) {
            if (board[row][c] == 'Q') return false;
        }
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] == 'Q') {
                    if (Math.abs(r - row) == Math.abs(c - col)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }

    let cnt = 0;
    let solveNQueensRec = (col, board) => {
        if (col == n) {
            cnt++;
        } else {
            for (let row = 0; row < n; row++) {
                if (isSafe(row, col, board)) {
                    board[row][col] = 'Q';
                    solveNQueensRec(col + 1, board);
                    board[row][col] = '.';
                }
            }
        }
    }

    let board = new Array(n).fill('.').map(arr => new Array(n).fill('.'));
    solveNQueensRec(0, board);
    return cnt;
};

console.log(totalNQueens(4));