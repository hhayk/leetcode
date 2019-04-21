/*

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

    Input:
        s: "cbaebabacd" p: "abc"

    Output:
        [0, 6]

    Explanation:
        The substring with start index = 0 is "cba", which is an anagram of "abc".
        The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

    Input:
        s: "abab" p: "ab"

    Output:
        [0, 1, 2]

    Explanation:
        The substring with start index = 0 is "ab", which is an anagram of "ab".
        The substring with start index = 1 is "ba", which is an anagram of "ab".
        The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let ret = [];

    let isAnagram = (s1, s2) => {
        let arr = Array(26).fill(0);

        for (let i = 0; i < p.length; i++) {
            arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != 0) return false;
        }

        return true;
    }

    for (let i = 0; i <= s.length - p.length; i++) {
        let str = s.substring(i, i + p.length);
        if (isAnagram(str, p)) ret.push(i);
    }

    return ret;
};


console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));