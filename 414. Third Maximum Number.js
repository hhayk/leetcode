/*

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

*/

class PriorityQueue {
    constructor(comparator = (a, b) => a - b, initVals = []) {
        this.comparator = comparator
        this.d = initVals
        this.heapify()
    }

    size() {
        return this.d.length
    }

    peek() {
        if (!this.d.length) return null
        return this.d[0]
    }

    offer(val) {
        this.d.push(val)
        this.bubbleUp(this.d.length - 1)
    }

    poll() {
        if (!this.d.length) return null
        const res = this.d[0]
        const last = this.d.pop()

        if (this.d.length) {
            this.d[0] = last
            this.bubbleDown(0)
        }

        return res
    }

    heapify() {
        for (let i = 0; i < this.d.length; i++) this.bubbleUp(i)
    }

    bubbleUp(pos) {
        const { comparator, d } = this

        while (pos) {
            let parent = (pos - 1) >>> 1

            if (comparator(d[pos], d[parent]) < 0) {
                [d[parent], d[pos]] = [d[pos], d[parent]]
                pos = parent
            } else {
                break
            }
        }
    }

    toArray() {
        return [...this.d]
    }

    bubbleDown(pos) {
        const { comparator, d } = this
        const last = d.length - 1

        while (true) {
            const left = (pos << 1) + 1
            const right = left + 1

            let minIdx = pos

            if (left <= last && comparator(d[left], d[minIdx]) < 0) minIdx = left
            if (right <= last && comparator(d[right], d[minIdx]) < 0) minIdx = right

            if (minIdx !== pos) {
                [d[minIdx], d[pos]] = [d[pos], d[minIdx]]
                pos = minIdx
            } else {
                break
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let k = 3;
    let queue = new PriorityQueue((a, b) => b - a, nums);
    let max = queue.peek();

    if (k > queue.size()) return max;
    else {
        while (--k > 0 && queue.size() > 0) {
            let last = queue.poll();
            while (last == queue.peek() && queue.size() > 0) queue.poll();
        }
        return queue.size() == 0 ? max : queue.poll();
    }
};

console.log(thirdMax([1, 1, 1]));
console.log(thirdMax([1, 1, 2]));
console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));