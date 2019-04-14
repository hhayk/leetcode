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

    let search = (row, col, dir, idx) => {
        let ch = board[row][col];
        let wh = word[idx];

        if (idx == word.length) return true;
        if (ch == wh) {
            let u = row - 1;
            let d = row + 1;
            let l = col - 1;
            let r = col + 1;

            let ub = dir == "DOWN" || u < 0 ? false : search(u, col, "UP", idx + 1);
            let db = dir == "UP" || d >= rows ? false : search(d, col, "DOWN", idx + 1);
            let lb = dir == "RIGHT" || l < 0 ? false : search(row, l, "LEFT", idx + 1);
            let rb = dir == "LEFT" || r >= cols ? false : search(row, r, "RIGHT", idx + 1);

            return ub || db || lb || rb;
        } else return false;
    };

    for (var row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let ch = board[row][col];
            let wh = word[0];

            if (ch == wh && word.length == 1) return true;
            if (ch == wh) {
                let dir = row == rows - 1 ? "UP" : "DOWN";
                let found = search(row, col, dir, 0);
                if (found) return true;
            }
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
console.log(exist(board, "SEE"));
console.log(exist(board, "ABCB"));
console.log(exist(board, "ECB"));
console.log(exist([['a']], "a"));
console.log(exist([["a","a"]], "aa"));