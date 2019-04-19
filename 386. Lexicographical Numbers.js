/*

Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let lexicalOrderRec = (acc, idx, n) => {
        if (idx > n) return
        acc.push(idx);

        for (let i = 0; i <= 9; i++) {
            let num = idx * 10 + i;
            lexicalOrderRec(acc, num, n);
        }
    }

    let acc = [];
    for (let i = 1; i <= Math.min(n, 9); i++) {
        lexicalOrderRec(acc, i, n);
    }
    return acc;
};

console.log(lexicalOrder(13));