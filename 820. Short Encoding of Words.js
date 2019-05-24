/*

Given a list of words, we may encode it by writing a reference string S and a list of indexes A.

For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].

Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.

What is the length of the shortest reference string S possible that encodes the given words?

Example:

Input: words = ["time", "me", "bell"]
Output: 10
Explanation: S = "time#bell#" and indexes = [0, 2, 5].
 

Note:

1 <= words.length <= 2000.
1 <= words[i].length <= 7.
Each word has only lowercase letters.

*/

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let set = new Set(words);
    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.slice(i, word.length));
        }
    }

    return [...set].reduce((pv, cv) => pv + cv.length + 1, 0);
};

console.log(minimumLengthEncoding(["time", "me", "bell"]));