/*

Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.

*/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    let arrA = Array(26).fill(0);
    let arrB = Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    [...A].forEach(ch => arrA[ch.charCodeAt(0) - aCharCode]++);
    [...B].forEach(ch => arrB[ch.charCodeAt(0) - aCharCode]++);

    let min = Number.MAX_VALUE;
    for (let i = 0; i < arrA.length; i++) {
        let ai = arrA[i];
        let bi = arrB[i];

        if (ai == 0 && bi == 0) continue;
        if (ai > 0 && bi == 0) return -1;
        min = Math.min(min, ai + bi);
    }

    console.log(arrA)
    console.log(arrB)

    return min;
};

console.log(repeatedStringMatch("a", "aa"));
console.log(repeatedStringMatch("abcd", "cdabcdab"));