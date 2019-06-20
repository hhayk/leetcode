/*

Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

*/

/**
 * Initialize your data structure here.
 */
function TreeNode() {
    this.child = Array(26);
    this.isWord = false;
}

var WordDictionary = function () {
    this.root = new TreeNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (let ch of word) {
        let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
        if (node.child[idx] == null) node.child[idx] = new TreeNode();
        node = node.child[idx]
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    let rec = (word, i, node) => {
        if (i >= word.length) return node.isWord;
        let ch = word[i];
        if (ch == '.') {
            for (let k = 0; k < node.child.length; k++) {
                if (node.child[k] != null && rec(word, i + 1, node.child[k])) {
                    return true;
                }
            }
            return false;
        } else {
            let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
            return node.child[idx] != null && rec(word, i + 1, node.child[idx]);
        }
    }

    return rec(word, 0, this.root);
};



/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

{
    let dict = new WordDictionary();
    dict.addWord("bad");
    dict.addWord("dad");
    dict.addWord("mad");
    let v1 = dict.search("pad");// -> false
    let v2 = dict.search("bad");// -> true
    let v3 = dict.search(".ad");// -> true
    let v4 = dict.search("b..");// -> true

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
}