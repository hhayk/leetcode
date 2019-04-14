/*

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
    Output: 5


Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
    Output: 4

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.

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
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const minHeap = new PriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        minHeap.offer(nums[i]);
        if (i >= k) minHeap.poll();
    }

    return minHeap.poll();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));