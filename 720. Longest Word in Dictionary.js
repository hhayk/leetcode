/*

Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].

*/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let set = new Set(words.sort((a, b) => {
        let alen = a.length;
        let blen = b.length;
        return alen == blen ? a.localeCompare(b) : blen - alen;
    }));
    
    for (let word of set) {
        let match = true;
        for (let i = 1; i < word.length; i++) {
            match &= set.has(word.slice(0, i));
        }
        if (match) return word;
    }

    return "";
};

console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));