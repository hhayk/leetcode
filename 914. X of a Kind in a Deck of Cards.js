/*

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
Example 3:

Input: [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000

*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let len = 10000;
    let g = -1;
    let arr = Array(len).fill(0);
    let gcd = (x, y) => x == 0 ? y : gcd(y % x, x);

    for (let di of deck) arr[di]++;
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            if (g == -1) g = arr[i];
            else g = gcd(g, arr[i]);
        }
    }

    return g >= 2;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1, 1]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));