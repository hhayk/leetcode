/*

In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

 

Example 1:

Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
Example 2:

Input: [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,2,1,2,1]
 

Note:

1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000

*/

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    let map = new Map();
    barcodes.forEach(b => map.set(b, (map.get(b) || 0) + 1));

    let idx = 1;
    [...map.entries()]
        .sort((kv1, kv2) => kv1[1] - kv2[1])
        .map(kv => kv[0])
        .forEach(k => {
            for (let i = 0; i < map.get(k); i++) {
                if (idx >= barcodes.length) idx = 0;
                barcodes[idx] = k;
                idx += 2;
            }
        });
    return barcodes;
};

console.log(rearrangeBarcodes([1, 1, 2]));
console.log(rearrangeBarcodes([1, 1, 1, 2, 2, 2]));
console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 3, 3]));