/*

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.

*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let rows = board.length;
    let cols = board[0].length;
    let ret = new Set();

    let findWordsRec = (row, col, visited, inSearch, idx) => {
        if (idx == inSearch.length) {
            ret.add(inSearch);
            return;
        }
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) return;
        if (board[row][col] != inSearch[idx]) return;

        visited[row][col] = true;
        findWordsRec(row + 1, col, visited, inSearch, idx + 1);
        findWordsRec(row - 1, col, visited, inSearch, idx + 1);
        findWordsRec(row, col + 1, visited, inSearch, idx + 1);
        findWordsRec(row, col - 1, visited, inSearch, idx + 1);
        visited[row][col] = false;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            words.forEach(w => {
                let visited = Array(rows).fill(false).map(_ => Array(cols).fill(false));
                findWordsRec(row, col, visited, w, 0);
            });
        }
    }

    return [...ret];
};

console.log(findWords(
    [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v']
    ], ["oath", "pea", "eat", "rain"])
)

console.log(findWords(
    [
        ["a", "b", "c"],
        ["a", "e", "d"],
        ["a", "f", "g"]
    ], ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"])
)