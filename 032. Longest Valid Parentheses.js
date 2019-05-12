/*

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"

*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0;
    let stack = [-1];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);

        if (ch == '(') stack.push(i);
        else {
            stack.pop();
            if (stack.length == 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }

    return max;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));