/*

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.

*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.nums.length == 0 || val >= this.nums[this.nums.length - 1]) {
        this.nums.push(val);
    } else {
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] > val) {
                this.nums.splice(i, 0, val);
                break;
            }
        }
    }

    return this.nums[this.nums.length - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

{
    let obj = new KthLargest(3, [4, 5, 8, 2]);
    let v1 = obj.add(3);   // returns 4
    let v2 = obj.add(5);   // returns 5
    let v3 = obj.add(10);  // returns 5
    let v4 = obj.add(9);   // returns 8
    let v5 = obj.add(4);   // returns 8

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log(v5);
}
{
    let obj = new KthLargest(1, []);
    let v1 = obj.add(-3);   // returns 4
    let v2 = obj.add(-2);   // returns 5
    let v3 = obj.add(-4);  // returns 5
    let v4 = obj.add(0);   // returns 8
    let v5 = obj.add(4);   // returns 8

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log(v5);
}
