// -- NOT SOLVED --

/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
    board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let temp = Array(rows).fill('.').map(_ => Array(cols).fill('.'));

    let search = (row, col, idx) => {
        if (idx == word.length) return true;
        if (row < 0 || col < 0 || row >= rows || col >= cols || temp[row][col] != '.' || board[row][col] != word.charAt(idx)) return false;

        temp[row][col] = board[row][col];
        let res = search(row + 1, col, idx + 1) || search(row - 1, col, idx + 1) || search(row, col + 1, idx + 1) || search(row, col - 1, idx + 1);
        temp[row][col] = '.';
        return res;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (search(row, col, 0)) return true;
        }
    }

    return false;
};

let board =
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]

console.log(exist(board, "ABCCED"));
console.log(exist(board, "ABCCED"));
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));
console.log(exist(board, "ECB"));
console.log(exist([['a']], "a"));
// console.log(exist([["a", "a"]], "aa"));