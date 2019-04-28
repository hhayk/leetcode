/*

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

    Input: head = 1->4->3->2->5->2, x = 3
    Output: 1->2->2->4->3->5

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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let before = []
    let middle = [];
    let after = [];

    let foundX = false;
    while (head) {
        let val = head.val;
        if (val >= x) {
            foundX = true;
            middle.push(val);
        } else {
            if (!foundX) before.push(val);
            else {
                if (val < x) before.push(val);
                else after.push(val);
            }
        }

        head = head.next;
    }

    let arr = [...before, ...middle, ...after];
    let node = null;
    let tmp = node;
    while (arr.length) {
        if (node == null) {
            node = new ListNode(arr.shift());
            tmp = node;
        } else {
            tmp.next = new ListNode(arr.shift());
            tmp = tmp.next;
        }
    }

    return node;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(4);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(2);
    node.next.next.next.next = new ListNode(5);
    node.next.next.next.next.next = new ListNode(2);
    console.log(partition(node, 3));
}
{
    let node = new ListNode(2);
    node.next = new ListNode(1);
    console.log(partition(node, 0));
}
{
    let node = new ListNode(2);
    node.next = new ListNode(1);
    console.log(partition(node, 3));
}