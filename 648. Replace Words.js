/*

In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

    Input: dict = ["cat", "bat", "rat"]
    sentence = "the cattle was rattled by the battery"
    Output: 
        "the cat was rat by the bat"
    

Note:

The input will only have lower-case letters.
1 <= dict words number <= 1000
1 <= sentence words number <= 1000
1 <= root length <= 100
1 <= sentence words length <= 1000

*/

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
    let set = new Set(dict);
    let arr = [];

    for (let word of sentence.split(" ")) {
        let str = "";
        for (let i = 1; i <= word.length; i++) {
            str = word.substring(0, i);
            if (set.has(str)) break;
        }
        arr.push(str);
    }

    return arr.join(" ");
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));