/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:

    Input:
        s = "catsanddog"
        wordDict = ["cat", "cats", "and", "sand", "dog"]
    Output:
    [
        "cats and dog",
        "cat sand dog"
    ]
    
Example 2:

    Input:
        s = "pineapplepenapple"
        wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
    Output:
    [
        "pine apple pen apple",
        "pineapple pen apple",
        "pine applepen apple"
    ]
    Explanation: Note that you are allowed to reuse a dictionary word.

Example 3:

    Input:
        s = "catsandog"
        wordDict = ["cats", "dog", "sand", "and", "cat"]
    Output:
        []

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    // let acc = [];
    // let set = new Set(wordDict);
    // let len = s.length;

    // let wordBreakRec = (si, ei, temp) => {
    //     if (ei > len) {
    //         if (si == ei - 1) acc.push(temp.join(" "));
    //         return;
    //     }

    //     let str = s.substring(si, ei);
    //     if (set.has(str)) wordBreakRec(ei, ei + 1, [...temp, str])
    //     wordBreakRec(si, ei + 1, temp)
    // }

    // wordBreakRec(0, 1, []);
    // return acc;

    let set = new Set(wordDict);
    let len = s.length;
    let memo = Array(len + 1).fill(false);
    memo[0] = [0];

    for (let i = 1; i < len + 1; i++) {
        memo[i] = [];
        for (let j = 0; j < i; j++) {
            if (memo[j].length > 0 && set.has(s.substring(j, i))) {
                memo[i].push(j);
            }
        }
    }

    let res = [];
    let strRec = (end, acc) => {
        if (end <= 0) res.push(acc.join(" "))
        else for (let start of memo[end]) strRec(start, [s.substring(start, end), ...acc]);
    }
    strRec(len, []);

    return res;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));