/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let fnc = (ch, stack) => {
        if (ch == '#') stack.pop();
        else stack.push(ch);
    }

    let stack1 = [];
    for (let ch of S) fnc(ch, stack1);
    let stack2 = [];
    for (let ch of T) fnc(ch, stack2);

    if (stack1.length != stack2.length) return false;
    for (let i = 0; i < stack1.length; i++) {
        if (stack1[i] != stack2[i]) return false;
    }
    return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));