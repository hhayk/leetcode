/*

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:

    Input: "25525511135"
    Output: ["255.255.11.135", "255.255.111.35"]

*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let arr = [];
    let len = s.length;

    let restoreIpAddressesRec = (idx, temp) => {
        if (idx == len && temp.length == 4) {
            arr.push(temp.join("."));
            return;
        }
        if (idx == len || temp.length == 4) {
            return;
        }

        for (let i = idx; i < len; i++) {
            if (i != idx && s[idx] == '0') return;

            let num = parseInt(s.slice(idx, i + 1));
            if (num > 255) return;

            temp.push(num);
            restoreIpAddressesRec(i + 1, temp);
            temp.pop();
        }
    }

    restoreIpAddressesRec(0, []);
    return arr;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("010010"));