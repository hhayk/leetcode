/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = head;
    let temp = node;
    let arr = [];

    while (temp) {
        arr.push(temp);
        temp = temp.next;
    }

    let len = arr.length;
    let si = len - n - 1;
    let ei = len - n + 1;
    
    if(si < 0) node = node.next;
    else arr[si].next = arr[ei];

    return node;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);

    console.log(removeNthFromEnd(node, 3));
}

{
    let node = new ListNode(1);
    node.next = new ListNode(2);

    console.log(removeNthFromEnd(node, 2));
}

{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);


    console.log(removeNthFromEnd(node, 2));
}