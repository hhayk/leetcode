/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

    Input:
    [
        1->4->5,
        1->3->4,
        2->6
    ]
    Output: 1->1->2->3->4->4->5->6

 */

/**
 * Definition for singly-linked list.
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let arr = [];
    for (let node of lists) {
        while (node != null) {
            arr.push(node.val);
            node = node.next;
        }
    }

    let head = null;
    let temp = null;
    arr.sort((a, b) => a - b).forEach((ai, i) => {
        if (i == 0) {
            head = new ListNode(ai);
            temp = head;
        } else {
            temp.next = new ListNode(ai);
            temp = temp.next;
        }
    });

    return head;
};

{
    let l1 = new ListNode(1);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(5);

    let l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);

    let l3 = new ListNode(2);
    l3.next = new ListNode(6);

    console.log(mergeKLists([l1, l2, l3]));
}

{
    // [[],[-1,5,11],[],[6,10]]
    let l1 = null;

    let l2 = new ListNode(-1);
    l2.next = new ListNode(5);
    l2.next.next = new ListNode(1);

    let l3 = null;

    let l4 = new ListNode(6);
    l4.next = new ListNode(10);

    console.log(mergeKLists([l1, l2, l3, l4]));
}