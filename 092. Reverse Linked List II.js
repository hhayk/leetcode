/*

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

    Input: 1->2->3->4->5->NULL, m = 2, n = 4
    Output: 1->4->3->2->5->NULL

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let temp = head;
    let i = 0;
    let arr = [];
    let pivotNode = null;

    while (temp) {
        if (i >= m - 1 && i <= n - 1) {
            arr.push(temp.val);
            if (!pivotNode) pivotNode = temp;
        } 

        if (i == n - 1) {
            while (arr.length > 0) {
                pivotNode.val = arr.pop();
                pivotNode = pivotNode.next;
            }
        }

        i++;
        temp = temp.next;
    }

    return head;
};

{
    let node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);

    console.log(reverseBetween(node, 2, 4));
}

{
    let node = new ListNode(3);
    node.next = new ListNode(5);

    console.log(reverseBetween(node, 1, 2));
}
