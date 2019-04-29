/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let tmp = head;

    while (tmp && tmp.next) {
        if (tmp.val == tmp.next.val) {
            tmp.next = tmp.next.next;
        } else {
            tmp = tmp.next;
        }
    }

    return head;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(1);
    node.next.next = new ListNode(1);
    node.next.next.next = new ListNode(2);
    console.log(deleteDuplicates(node))
}