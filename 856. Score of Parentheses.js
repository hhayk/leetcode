/*

Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: "()"
Output: 1
Example 2:

Input: "(())"
Output: 2
Example 3:

Input: "()()"
Output: 2
Example 4:

Input: "(()(()))"
Output: 6
 

Note:

S is a balanced parentheses string, containing only ( and ).
2 <= S.length <= 50

*/

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
    let stack = [];

    for (let ch of S) {
        if (ch == '(') stack.push(0);
        else {
            let a = stack.pop() || 0;
            let b = stack.pop() || 0;
            stack.push(b + Math.max(2 * a, 1));
        }
    }

    return stack.pop();
};

console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()()"));
console.log(scoreOfParentheses("(()(()))"));