/*

Implement a magic directory with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
    Input: buildDict(["hello", "leetcode"]), Output: Null
    Input: search("hello"), Output: False
    Input: search("hhllo"), Output: True
    Input: search("hell"), Output: False
    Input: search("leetcoded"), Output: False

Note:
    You may assume that all the inputs are consist of lowercase letters a-z.
    For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
    Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.

*/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
    this.map = new Map();
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
    for (let word of dict) {
        let len = word.length;

        if (!this.map.has(len)) this.map.set(len, []);
        this.map.get(len).push(word);
    }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
    let len = word.length;

    if (!this.map.has(len)) return false;
    for (let str of this.map.get(len)) {
        let allowedMismatch = 1;
        for (let i = 0; i < len; i++) {
            if (word.charAt(i) != str.charAt(i)) {
                if (allowedMismatch-- == 0) break;
            }
        }

        if(allowedMismatch == 0) return true;
    }

    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

let obj = new MagicDictionary();
obj.buildDict(["hello", "leetcode"]);
console.log(obj.search("hello"));
console.log(obj.search("hhllo"));
console.log(obj.search("hell"));
console.log(obj.search("leetcoded"));