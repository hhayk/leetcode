/*

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

 
Example:

    Input: ["Hello", "Alaska", "Dad", "Peace"]
    Output: ["Alaska", "Dad"]

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let row1 = new Set(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']);
    let row2 = new Set(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']);
    let row3 = new Set(['Z', 'X', 'C', 'V', 'B', 'N', 'M']);

    return words.filter(word => {
        let arr = [...word].map(ch => ch.toUpperCase());
        return arr.every(ch => row1.has(ch)) ||
            arr.every(ch => row2.has(ch)) ||
            arr.every(ch => row3.has(ch));
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));