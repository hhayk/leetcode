/*

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.

*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let aCharCode = 'a'.charCodeAt(0);
    let len = words.length;
    let max = 0;

    let check = (w1, w2) => {
        let arr = Array(26).fill(0);
        [...w1].forEach(ch => arr[ch.charCodeAt(0) - aCharCode]++);
        return [...w2].every(ch => arr[ch.charCodeAt(0) - aCharCode] == 0);
    }

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let w1 = words[i];
            let w2 = words[j];
            if (check(w1, w2)) {
                max = Math.max(max, w1.length * w2.length);
            }
        }
    }

    return max;
};

console.log(maxProduct(["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]));
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));