/*

Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

 
Follow up:
Could you solve it using only O(1) extra space?

*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let idx = 0;
    while (idx < chars.length) {
        let cnt = 1;
        while (chars[idx] == chars[idx + 1]) {
            chars.splice(idx, 1);
            cnt++;
        }
        idx++;
        if (cnt > 1) {
            let arr = [...cnt.toString()];
            chars.splice(idx, 0, ...arr);
            idx += arr.length;
        }
    }

    return chars.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c", "e", "f", "f"]));
console.log(compress(["a"]));
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));