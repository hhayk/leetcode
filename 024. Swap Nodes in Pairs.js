/*

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.

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
var swapPairs = function (head) {
    let temp = head;
    
    while (temp && temp.next) {
        let k = temp.val;
        temp.val = temp.next.val;
        temp.next.val = k;
        temp = temp.next.next;
    }

    return head;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    console.log(swapPairs(node));
}