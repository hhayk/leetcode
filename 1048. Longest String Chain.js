/*

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

 

Example 1:

Input: ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: one of the longest word chain is "a","ba","bda","bdca".
 

Note:

1 <= words.length <= 1000
1 <= words[i].length <= 16
words[i] only consists of English lowercase letters.

*/

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length);
    
    let len = words.length;
    let dp = Array(len).fill(1);
    let aCharCode = 'a'.charCodeAt(0);
    let maxLen = 1;

    let isPredecessor = (w1, w2) => {
        let arr = Array(26).fill(0);
        [...w2].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]++);
        [...w1].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]--);

        let diff = 1;
        for (let ai of arr) {
            if (ai != 0) diff--;
            if (diff < 0) return false;
        }
        return true;
    }

    for (let i = 0; i < len; i++) {
        let word = words[i];
        let j = i - 1;
        while (j >= 0 && words[j].length >= word.length - 1) {
            if (words[j].length == word.length) j--;
            else {
                if (isPredecessor(word, words[j])) {
                    dp[i] = dp[j] + 1;
                    maxLen = Math.max(maxLen, dp[i]);
                }
                j--;
            }
        }
    }

    return maxLen;
};

console.log(longestStrChain(["sgtnz", "sgtz", "sgz", "ikrcyoglz", "ajelpkpx", "ajelpkpxm", "srqgtnz", "srqgotnz", "srgtnz", "ijkrcyoglz"]));
console.log(longestStrChain(["ksqvsyq", "ks", "kss", "czvh", "zczpzvdhx", "zczpzvh", "zczpzvhx", "zcpzvh", "zczvh", "gr", "grukmj", "ksqvsq", "gruj", "kssq", "ksqsq", "grukkmj", "grukj", "zczpzfvdhx", "gru"]));
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));