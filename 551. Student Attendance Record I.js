/*

You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
    Input: "PPALLP"
    Output: True

Example 2:
    Input: "PPALLL"
    Output: False

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let aCount = 0;
    let lContCount = 0;
    let res = true;

    [...s, ''].forEach(ch => {
        if (aCount > 1 || lContCount > 2) {
            res = false;
            return;
        }

        if (ch == 'L') lContCount++
        else {
            if (ch == 'A') aCount++;
            lContCount = 0;
        }
    });

    return res;
};

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));