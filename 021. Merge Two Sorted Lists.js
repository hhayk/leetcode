/*

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4

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
var mergeTwoLists = function (l1, l2) {
    let l3 = null;
    let temp = null;

    while (l1 || l2) {
        let v1 = l1 == null ? Number.MAX_VALUE : l1.val;
        let v2 = l2 == null ? Number.MAX_VALUE : l2.val;
        let vv = Math.min(v1, v2);

        if (!l3) {
            l3 = new ListNode(vv);
            temp = l3;
        } else {
            temp.next = new ListNode(vv);
            temp = temp.next;
        }

        if (v1 < v2) l1 = l1.next;
        else l2 = l2.next;
    }

    return l3;
}

{
    let l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);

    let l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);

    console.log(mergeTwoLists(l1, l2));
}