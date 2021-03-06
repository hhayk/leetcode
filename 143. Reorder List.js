/*

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

    Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:

    Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let tmp;
    let arr = [];

    tmp = head;
    while (tmp) {
        arr.push(tmp);
        tmp = tmp.next;
    }

    tmp = null;
    for (let i = 0; i < arr.length / 2; i++) {
        let idx1 = i;
        let idx2 = arr.length - i - 1;

        if (tmp) {
            tmp.next = arr[idx1];
            tmp = tmp.next;
        } else {
            tmp = arr[idx1];
        }

        if (idx1 < idx2) {
            tmp.next = arr[idx2];
            tmp = tmp.next;
        }
    }
    if (tmp) tmp.next = null;

    return head;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);
    console.log(reorderList(node));
}
{
    console.log(reorderList(null));
}