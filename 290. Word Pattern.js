/*

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let arr = str.split(" ");

    if (pattern.length != arr.length) return false;
    else {
        let len = arr.length;
        let map1 = new Map();
        let map2 = new Map();

        for (let i = 0; i < len; i++) {
            map1.set(pattern[i], (map1.get(pattern[i]) || 0) + 1);
            map2.set(arr[i], (map2.get(arr[i]) || 0) + 1);
        }

        for (let i = 0; i < len; i++) {
            if (map1.get(pattern[i]) != map2.get(arr[i])) return false;
        }
    }

    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("aaaa", "dog dog dog dog"));