/*


Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


Example:

    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];

    let map = new Map([[1, ""], [2, "abc"], [3, "def"], [4, "ghi"], [5, "jkl"], [6, "mno"], [7, "pqrs"], [8, "tuv"], [9, "wxyz"]]);
    let letters = [...digits].map(d => map.get(Number(d)));

    let ret = [];
    let letterCombinationsRec = (idx, tmp) => {
        if (tmp.length == letters.length) {
            ret.push(tmp.join(""));
        } else {
            for (let i = idx; i < letters.length; i++) {
                [...letters[i]].forEach(ch => {
                    letterCombinationsRec(i + 1, [...tmp, ch]);
                })
            }
        }
    }
    letterCombinationsRec(0, []);

    return ret;
};

console.log(letterCombinations("9"));
console.log(letterCombinations("23"));
console.log(letterCombinations("239"));