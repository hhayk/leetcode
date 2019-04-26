/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

    Input: "()"
    Output: true

Example 2:

    Input: "()[]{}"
    Output: true

Example 3:

    Input: "(]"
    Output: false

Example 4:

    Input: "([)]"
    Output: false

Example 5:

    Input: "{[]}"
    Output: true

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [...s];
    let pattern = "()[]{}";
    let stack = [];

    while (arr.length) {
        let ch = arr.shift();
        let idx = pattern.indexOf(ch);
        
        if (idx % 2 == 0 || stack.length == 0) {
            stack.push(ch);
        } else {
            let lastIdx = pattern.indexOf(stack[stack.length - 1]);
            if (idx - lastIdx == 1) stack.pop();
            else stack.push(ch);
        }
    }

    return stack.length == 0;
};

console.log(isValid("(])"));
console.log(isValid("()"));
console.log(isValid("{[]([{[]}])}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));