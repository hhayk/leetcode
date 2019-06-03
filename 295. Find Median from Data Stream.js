/*

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.arr = [];
};


MedianFinder.prototype.insertIndex = function (arr, value) {
    let low = 0;
    let high = arr.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (arr[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
}
/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    if (this.arr.length == 0) this.arr.push(num);
    else {
        let idx = this.insertIndex(this.arr, num);
        this.arr = [
            ...this.arr.slice(0, idx),
            num,
            ...this.arr.slice(idx)
        ];
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let len = this.arr.length;
    return len % 2 == 0 ? (this.arr[len / 2 - 1] + this.arr[len / 2]) * 0.5 : this.arr[~~(len / 2)];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

{
    let obj = new MedianFinder()
    obj.addNum(1)
    obj.addNum(2)
    let var1 = obj.findMedian()// -> 1.5
    obj.addNum(3)
    obj.addNum(8)
    obj.addNum(6)
    obj.addNum(10)
    let var2 = obj.findMedian()// -> 2

    console.log(var1, var2)
}