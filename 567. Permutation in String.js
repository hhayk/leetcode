/*

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. 
In other words, one of the first string's permutations is the substring of the second string.

Example 1:

    Input: s1 = "ab" s2 = "eidbaooo"
    Output: True
    Explanation: 
        s2 contains one permutation of s1 ("ba").

Example 2:

    Input:s1= "ab" s2 = "eidboaoo"
    Output: False
    

Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // let per = [];

    // let swap = (str, i, j) => {
    //     let arr = [...str];
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    //     return arr.join("");
    // }

    // let permute = (str, left, right) => {
    //     if (left == right) {
    //         per.push(str);
    //     } else {
    //         for (let i = left; i <= right; i++) {
    //             str = swap(str, left, i);
    //             permute(str, left + 1, right);
    //             str = swap(str, left, i);
    //         }
    //     }

    // }

    // permute(s1, 0, s1.length - 1);
    // return per.some(p => s2.search(p) != -1);



    let arr1 = Array(26).fill(0);
    let arr2 = Array(26).fill(0);
    let len1 = s1.length;
    let len2 = s2.length;

    if (len1 > len2) return false;

    let match = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) if (arr1[i] != arr2[i]) return false;
        return true;
    }

    for (let i = 0; i < len1; i++) {
        arr1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = len1; i < len2; i++) {
        if (match(arr1, arr2)) return true;

        arr2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr2[s2.charCodeAt(i - len1) - 'a'.charCodeAt(0)]--;
    }

    return match(arr1, arr2);
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));