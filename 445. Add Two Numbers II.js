/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let toArr = (l) => {
        let arr = []
        while (l) {
            arr.push(l.val);
            l = l.next;
        }
        return arr;
    }
    let toList = (arr) => {
        let tmp = null;
        let ret = null;
        while (arr.length) {
            let v = arr.pop();
            if (tmp == null) {
                tmp = new ListNode(v);
                ret = tmp;
            }
            else {
                tmp.next = new ListNode(v);
                tmp = tmp.next;
            }
        }

        return ret;
    }

    let arr1 = toArr(l1);
    let arr2 = toArr(l2);
    let arr = [];
    let cur = 0;
    while (arr1.length || arr2.length) {
        let v1 = arr1.pop() || 0;
        let v2 = arr2.pop() || 0;
        let vv = v1 + v2 + cur;

        arr.push(vv % 10);
        cur = ~~(vv / 10);
    }
    if (cur > 0) arr.push(cur);

    return toList(arr);
};

{
    let l1 = new ListNode(7);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);
    l1.next.next.next = new ListNode(3);

    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    console.log(addTwoNumbers(l1, l2))
}
{
    let l1 = new ListNode(5);
    let l2 = new ListNode(5);

    console.log(addTwoNumbers(l1, l2))
}