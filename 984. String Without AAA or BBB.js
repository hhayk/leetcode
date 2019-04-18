/*

Given two integers A and B, return any string S such that:

S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
The substring 'aaa' does not occur in S;
The substring 'bbb' does not occur in S.
 

Example 1:

    Input: A = 1, B = 2
    Output: "abb"
    Explanation: "abb", "bab" and "bba" are all correct answers.

Example 2:

    Input: A = 4, B = 1
    Output: "aabaa"
 

    Note:

    0 <= A <= 100
    0 <= B <= 100
    It is guaranteed such an S exists for the given A and B.

*/

/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function (A, B) {
    let nextIsA = (A, B, straight, prevIsA) => {
        if (A == 0) return false;
        if (B == 0) return true;
        if (straight == 2) return !prevIsA;
        return A > B;
    }

    let strWithout3a3bRec = (A, B, ss, prevIsA, acc) => {
        if (A == 0 && B == 0) return acc;

        let isA = nextIsA(A, B, ss, prevIsA);
        let straight = ss == 2 ? 0 : ss + 1;
        if (isA) return strWithout3a3bRec(A - 1, B, straight, isA, acc + 'a');
        else return strWithout3a3bRec(A, B - 1, straight, isA, acc + 'b');
    }

    return strWithout3a3bRec(A, B, 0, nextIsA(A, B, false, 0), '');
};

console.log(strWithout3a3b(1, 2));
console.log(strWithout3a3b(4, 1));
console.log(strWithout3a3b(2, 3));