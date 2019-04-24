/*

Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let digs = "1234567890";

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);

        if (ch == ']') {
            let chars = [];
            while (chars[0] != '[') {
                chars.unshift(stack.pop());
            }
            chars.shift();

            let digits = [];
            while (digs.includes(stack[stack.length - 1])) {
                digits.unshift(stack.pop());
            }

            stack.push(chars.join("").repeat(Number(digits.join(""))));
        } else {
            stack.push(ch);
        }
    }

    return stack.join("");
};

console.log(decodeString("100[leetcode]"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));