/*

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

    Input: ["bella","label","roller"]
    Output: ["e","l","l"]

Example 2:

    Input: ["cool","lock","cook"]
    Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let map = new Map();

    A.forEach((str, i) => {
        [...str].forEach(ch => {
            if (!map.has(ch)) map.set(ch, Array(100).fill(0));
            map.get(ch)[i] += 1;
        })
    })

    let len = A.length;
    let ans = [];
    for (let [key, values] of map) {
        for (let i = 0; i < Math.min(...values.slice(0, len)); i++) ans.push(key);
    }

    return ans;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));