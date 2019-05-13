/*

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let arr = new Array(n).fill(false);
    let count = n > 2 ? 1 : 0;

    for (let i = 3; i < n; i += 2) {
        if (!arr[i]) {
            count++;
            for (let j = 3; i * j < n; j += 2) {
                arr[i * j] = true;
            }
        }
    }

    return count;
};

console.log(countPrimes(10));
console.log(countPrimes(499979));