/*

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. 
If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

Example:
    Input: s = "abcdefg", k = 2
    Output: "bacdfeg"

Restrictions:
    The string consists of lower English letters only.
    Length of the given string and k will in the range [1, 10000]

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = [...s];
    for (let i = 0; i < arr.length; i += 2 * k) {
        let start = i;
        let end = i + k - 1;
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join("");
};

console.log(reverseStr("abcdefg", 2))

