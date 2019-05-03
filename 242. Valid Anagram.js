/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arr = Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    [...s].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]++);
    [...t].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]--);

    return arr.every(i => i == 0);
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));