/*

You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: "AAABBC"
Output: 188

*/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let set = new Set();
    let len = tiles.length;

    let rec = (idx, arr) => {
        if (idx >= 1) set.add(arr.slice(0, idx).join(""));
        if (idx == len) return;

        for (let i = idx; i < len; i++) {
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
            rec(idx + 1, arr);
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    
    rec(0, [...tiles]);
    return set.size;
};

console.log(numTilePossibilities("AAB"));
console.log(numTilePossibilities("AAABBC"));