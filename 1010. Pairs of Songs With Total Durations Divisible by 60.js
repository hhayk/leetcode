/*

In a list of songs, the i-th song has a duration of time[i] seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i < j with (time[i] + time[j]) % 60 == 0.

 

Example 1:

    Input: [30,20,150,100,40]
    Output: 3
    Explanation: 
        Three pairs have a total duration divisible by 60:
            (time[0] = 30, time[2] = 150): total duration 180
            (time[1] = 20, time[3] = 100): total duration 120
            (time[1] = 20, time[4] = 40): total duration 60

Example 2:

    Input: [60,60,60]
    Output: 3
        Explanation: 
            All three pairs have a total duration of 120, which is divisible by 60.
 

Note:

1 <= time.length <= 60000
1 <= time[i] <= 500

*/

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let ret = 0;

    let len = time.length;
    for (let i = 0; i < len; i++) {
        let ti = time[i];
        for (let j = i + 1; j < len; j++) {
            let tj = time[j];
            sum = ti + tj;

            if (sum % 60 == 0) ret++;

        }
    }

    return ret;
};

console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));
console.log(numPairsDivisibleBy60([60, 60, 60]));