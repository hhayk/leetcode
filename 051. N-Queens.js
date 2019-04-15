/*

The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

Example:

    Input: 4
    Output: [
    [".Q..",  // Solution 1
    "...Q",
    "Q...",
    "..Q."],

    ["..Q.",  // Solution 2
    "Q...",
    "...Q",
    ".Q.."]
    ]
    Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let prettyBoard = (board) => {
        let ret = new Array(n);
        for (let r = 0; r < n; r++) {
            ret[r] = board[r].join('');
        }
        return ret;
    }

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

    let solveNQueensRec = (col, board, acc) => {
        if (col == n) {
            acc.push(prettyBoard(board));
            return acc;
        } else {
            for (let row = 0; row < n; row++) {
                if (isSafe(row, col, board)) {
                    board[row][col] = 'Q';
                    solveNQueensRec(col + 1, board, acc);
                    board[row][col] = '.';
                }
            }
            return acc;
        }
    }

    let board = new Array(n).fill('.').map(arr => new Array(n).fill('.'));
    return solveNQueensRec(0, board, []);
};

console.log(solveNQueens(4));