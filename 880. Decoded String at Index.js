/*

An encoded string S is given.  To find and write the decoded string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit (say d), the entire current tape is repeatedly written d-1 more times in total.
Now for some encoded string S, and an index K, find and return the K-th letter (1 indexed) in the decoded string.

 

Example 1:

    Input: S = "leet2code3", K = 10
    Output: "o"
    Explanation: 
        The decoded string is "leetleetcodeleetleetcodeleetleetcode".
        The 10th letter in the string is "o".

Example 2:

    Input: S = "ha22", K = 5
    Output: "h"
    Explanation: 
        The decoded string is "hahahaha".  The 5th letter is "h".

Example 3:

    Input: S = "a2345678999999999999999", K = 1
    Output: "a"
    Explanation: 
        The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".
 

Note:

2 <= S.length <= 100
S will only contain lowercase letters and digits 2 through 9.
S starts with a letter.
1 <= K <= 10^9
The decoded string is guaranteed to have less than 2^63 letters.

*/

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
    // let str = '';
    // let si = 0;

    // while (str.length < K) {
    //     let ch = S.charAt(si);
    //     let num = Number(ch);

    //     if (num) {
    //         str = str.repeat(num);
    //     } else {
    //         str += ch;
    //     }

    //     si++;
    // }

    // return str.charAt(K - 1);

    let len = S.length;
    let size = 0;

    for (let i = 0; i < len; i++) {
        let num = Number(S.charAt(i));
        if (num) size *= num;
        else size++;
    }

    for (let i = len - 1; i >= 0; --i) {
        let num = Number(S.charAt(i));
        K %= size;

        if (num) {
            size = Math.ceil(size / num);
        } else {
            if (K == 0) return S.charAt(i);
            size--;
        }
    }

    throw new Error("");
};

console.log(decodeAtIndex("jb8dis8msunncn92o7o45iq7jrkkmx8q24vesm6i4jdtweq6gxccrb7p2fhxsqke7njwcul4y9cd3rpmrhq3ve6prifmt7aa89tt", 731963130));
// console.log(decodeAtIndex("cpmxv8ewnfk3xxcilcmm68d2ygc88daomywc3imncfjgtwj8nrxjtwhiem5nzqnicxzo248g52y72v3yujqpvqcssrofd99lkovg", 480551547));
// console.log(decodeAtIndex("leet2code3", 10));
// console.log(decodeAtIndex("leet2code3", 20));
// console.log(decodeAtIndex("ha22", 5));
// console.log(decodeAtIndex("a2345678999999999999999", 1));