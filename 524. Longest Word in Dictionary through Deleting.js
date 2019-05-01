/*

-- NOT SOLVED

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.

*/

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
    let arr = Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);
    [...s].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]--);

    let tmp = d.filter(str => {
        let cpy = arr.slice();
        [...str].forEach(ch => cpy[ch.charCodeAt(0) - aCharCode]++);
        return cpy.every(i => i <= 0);
    });

    let maxLen = Number.MIN_VALUE;
    tmp.forEach(w => maxLen = Math.max(maxLen, w.length));

    console.log(tmp)

    return tmp.filter(t => t.length == maxLen).sort().shift() || "";
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
console.log(findLongestWord("abpcplea", ["a", "b", "c"]));
console.log(findLongestWord("bab", ["ba", "ab", "a", "b"]));
console.log(findLongestWord("aewfafwafjlwajflwajflwafj", ["apple", "ewaf", "awefawfwaf", "awef", "awefe", "ewafeffewafewf"]));
