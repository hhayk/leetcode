/*

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;

    let map = new Map();
    let map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        let chs = s.charAt(i);
        let cht = t.charAt(i);

        if (map.has(chs)) {
            if (map.get(chs) != cht) return false;
        } else {
            if (map2.has(cht)) return false;

            map.set(chs, cht);
            map2.set(cht, chs);
        }
    }

    return true;
};

console.log(isIsomorphic("ab", "ca"));
console.log(isIsomorphic("ab", "aa"));
console.log(isIsomorphic("ab", "ba"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "paper"));