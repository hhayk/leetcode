/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.

Note: You may assume the string contain only lowercase letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, map.has(ch) ? map.get(ch) + 1 : 0);
    }

    for (let [key, value] of map.entries()) {
        if (value == 0) return s.indexOf(key);
    }

    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));