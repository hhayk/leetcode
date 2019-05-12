/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.

*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let len = word.length;
    let upCnt = 0;
    let loCnt = 0;
    let fiUp = word[0] == word[0].toUpperCase();

    for (let i = 0; i < len; i++) {
        let ch = word.charAt(i);
        let isUp = ch == ch.toUpperCase();

        if (i == 0) fiUp = isUp;
        isUp ? upCnt++ : loCnt++;
    }

    return upCnt == len || loCnt == len || (fiUp && loCnt == len - 1);
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));