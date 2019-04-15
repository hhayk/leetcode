/*

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

    Input: "hello"
    Output: "holle"

Example 2:

    Input: "leetcode"
    Output: "leotcede"

Note:
The vowels does not include the letter "y".

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // let reverseVowelsRec = (left, right) => {
    //     if (left > right) return ss.join('');

    //     let lch = ss[left];
    //     let rch = ss[right];

    //     if (!vowels.has(lch)) return reverseVowelsRec(left + 1, right);
    //     else if (!vowels.has(rch)) return reverseVowelsRec(left, right - 1);
    //     else {
    //         ss[right] = lch;
    //         ss[left] = rch;
    //         return reverseVowelsRec(left + 1, right - 1);
    //     }
    // }

    // return reverseVowelsRec(0, s.length - 1);

    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let ss = [...s];

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (!vowels.has(ss[left]) && left < right) left++;
        while (!vowels.has(ss[right]) && left < right) right--;

        let temp = ss[left];
        ss[left] = ss[right];
        ss[right] = temp;

        left++;
        right--;
    }

    return ss.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));