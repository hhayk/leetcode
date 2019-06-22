/*

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    return [...s].sort((a, b) => {
        let am = map.get(a);
        let bm = map.get(b);
        return am == bm ? a.localeCompare(b) : bm - am;
    }).join("");
};

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
console.log(frequencySort("loveleetcode"));