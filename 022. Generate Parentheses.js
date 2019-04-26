/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let acc = [];

    let generateParenthesisRec = (open, close, tmp) => {
        if (tmp.length == 2 * n) {
            acc.push(tmp.join(""));
            return;
        } else {
            if (open < n) generateParenthesisRec(open + 1, close, [...tmp, "("]);
            if (close < open) generateParenthesisRec(open, close + 1, [...tmp, ")"]);
        }
    }

    generateParenthesisRec(0, 0, []);
    return acc;
};

console.log(generateParenthesis(3))