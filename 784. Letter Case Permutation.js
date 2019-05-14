/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.

*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let arr = [...S];
    let len = arr.length;
    let map = new Map();

    let isLetter = (ch) => ch.match(/[a-z]/i);
    let letterCasePermutation = (arr, idx) => {
        if (len == idx) {
            let str = arr.join("");
            map.set(str, str);
        } else {
            let ch = arr[idx];

            if (isLetter(ch)) {
                arr[idx] = ch.toUpperCase();
                letterCasePermutation(arr, idx + 1);
                arr[idx] = ch.toLowerCase();
                letterCasePermutation(arr, idx + 1);
            } else {
                letterCasePermutation(arr, idx + 1);
            }
        }
    }

    for (let i = 0; i < len; i++) {
        letterCasePermutation(arr, i);
    }

    return [...map.values()];
};

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));
console.log(letterCasePermutation("12345"));