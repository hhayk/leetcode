/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let arr = Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    for (let ch of ransomNote) arr[ch.charCodeAt(0) - aCharCode]--;
    for (let ch of magazine) arr[ch.charCodeAt(0) - aCharCode]++;

    return arr.every(i => i >= 0);
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));